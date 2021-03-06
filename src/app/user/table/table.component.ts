import { Component, OnInit, ViewChild } from '@angular/core';
import { ServeKH } from 'src/app/serve/khachhang/serveKH';
import { DataStateChangeEventArgs, GridComponent } from '@syncfusion/ej2-angular-grids';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Query, DataManager } from '@syncfusion/ej2-data';
@Component({
  selector: 'app-user-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
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
     private KHService: ServeKH,
     private router: Router
  ) {
   
  }
  ngOnInit(): void {
    this.KHService.refresh$.subscribe(() => {
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
    this.KHService.get().subscribe((result) => {
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
          diachi: args.data['diachi'],
          S??T: args.data['S??T'],
          gioitinh: args.data['gioitinh'],
        };
        this.update(data);
      }
    } else if (args.requestType === 'delete') {
      this.delete(args.data[0]._id);
    }
  }
  insert(data) {
    let KH = {ten: data.ten,
              diachi:data.diachi,
              S??T:data.S??T,
              gioitinh:data.gioitinh           
      };
    this.KHService.insert(KH).subscribe(
      (data) => {
        if (data.code == 201) {
          this.alert = 'Th??m th??nh c??ng!';
        }
        setTimeout(() => {
          this.alert = '';
        }, 2250);
      },
      (error) => {
        this.alert = 'Th??m kh??ng th??nh c??ng!';
        setTimeout(() => {
          this.alert = '';
        }, 2250);
        this.get();
      }
    );
  }
  delete(_id) {
    this.KHService.delete(_id).subscribe(
      (data) => {
        if (data.code == 200) {
          this.alert = 'X??a th??nh c??ng!';
        }
        setTimeout(() => {
          this.alert = '';
        }, 2250);
      },
      (error) => {
        this.alert = 'X??a kh??ng th??nh c??ng!';
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
      item['diachi'] == data['diachi'];
      item['S??T'] == data['S??T'];
      item['gioitinh'] == data['gioitinh'];


    });
    let id = data._id;
    delete data._id;
    this.KHService.update(id, data).subscribe(
      (result) => {
        if (result.code == 200) {
          this.alert = 'C???p nh???t th??nh c??ng!';
        }
        setTimeout(() => {
          this.alert = '';
        }, 2250);
      },
      (error) => {
        this.alert = 'C???p nh???t kh??ng th??nh c??ng!';
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

