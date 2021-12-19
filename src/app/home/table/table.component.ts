import { Component, OnInit, ViewChild } from '@angular/core';
import { DataStateChangeEventArgs, GridComponent } from '@syncfusion/ej2-angular-grids';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Query, DataManager } from '@syncfusion/ej2-data';
import { ServeMH } from 'src/app/serve/mathang/serveMH';
@Component({
  selector: 'app-table-Home',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableHomeComponent implements OnInit {
  @ViewChild('grid') grid: GridComponent;
  public selectedName;
  public List:Observable<DataStateChangeEventArgs>;
  public toolbar;
  public pageSettings;
  public editSettings;
  public position;
  public width = 250;
  public alert = '';
  public status = [
    { name: 'true', value: true },
    { name: 'false', value: false },
  ];
  StatusParams;

  constructor(
     private MHService: ServeMH,
     private router: Router
  ) {
   
  }
  ngOnInit(): void {
    this.MHService.refresh$.subscribe(() => {
      this.get();
    });
    this.get();
    this.StatusParams = {
      params: {
        allowFiltering: false,
        dataSource: new DataManager(this.status),
        fields: { text: 'name', value: 'value' },
        query: new Query(),
        actionComplete: () => false,
      },
    };
    var screenWidth = window.innerWidth;
    this.editSettings = {
      showDeleteConfirmDialog: true,
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
    };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
    this.pageSettings = { pageSize: screenWidth > 1366 ? 15 : 10 };
    this.position = { X: (screenWidth - this.width) / 2, Y: 100 };
  }
  get() {
    this.MHService.get().subscribe((result) => {
      this.List = result.data;
    });
  }
  actionBegin(args) {
    if (args.requestType === 'save') {
      if (args.action == 'add') {
        this.insert(args.data);
      } else if (args.action == 'edit') {
        let data = {
          _id: args.data['_id'],
          ten: args.data['ten'],
          giatien: args.data['giatien'],
          loai: args.data['loai'],
          mau: args.data['mau'],
          soluong: args.data['soluong']
        };
        this.update(data);
      }
    } else if (args.requestType === 'delete') {
      this.delete(args.data[0]._id);
    }
  }
  insert(data) {
    let KH = {ten: data.ten,
              giatien:data.giatien,
              loai:data.loai,
              mau:data.mau,
              soluong:data.soluong           
      };
    this.MHService.insert(KH).subscribe(
      (data) => {
        if (data.code == 201) {
          this.alert = 'Thêm thành công!';
        }
        setTimeout(() => {
          this.alert = '';
        }, 2250);
      },
      (error) => {
        this.alert = 'Thêm không thành công!';
        setTimeout(() => {
          this.alert = '';
        }, 2250);
        this.get();
      }
    );
  }
  delete(_id) {
    this.MHService.delete(_id).subscribe(
      (data) => {
        if (data.code == 200) {
          this.alert = 'Xóa thành công!';
        }
        setTimeout(() => {
          this.alert = '';
        }, 2250);
      },
      (error) => {
        this.alert = 'Xóa không thành công!';
        setTimeout(() => {
          this.alert = '';
        }, 2250);
        this.get();
      }
    );
  }
  update(data) {
    this.List.forEach((item) => {
      item['ten'] == data['ten'];
      item['giatien'] == data['giatien'];
      item['loai'] == data['loai'];
      item['mau'] == data['mau'];
      item['soluong'] == data['soluong'];


    });
    let id = data._id;
    delete data._id;
    this.MHService.update(id, data).subscribe(
      (result) => {
        if (result.code == 200) {
          this.alert = 'Cập nhật thành công!';
        }
        setTimeout(() => {
          this.alert = '';
        }, 2250);
      },
      (error) => {
        this.alert = 'Cập nhật không thành công!';
        setTimeout(() => {
          this.alert = '';
        }, 2250);
        this.get();
      }
    );
  }

  public onLoad() {
    this.grid.element.addEventListener(
      'keydown',
      this.debounce((e) => {
        if (e.target.getAttribute('id').indexOf('_searchbar') !== -1) {
          this.grid.search((e.target as HTMLInputElement).value);
        }
      }, 0)
    );
  }
  public debounce = (func, delay) => {
    let debounceTimer;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  };
  dataBound(args) {
    if ((this.grid.dataSource as any)?.length === 0) {
      (document.getElementsByClassName('e-gridpager')[0] as any).style.display =
        'none';
    } else {
      (document.getElementsByClassName('e-gridpager')[0] as any).style.display =
        'block';
    }
  }
//  ngOnDestroy(): void{}
}
