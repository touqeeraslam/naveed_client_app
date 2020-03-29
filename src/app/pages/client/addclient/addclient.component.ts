import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientModel } from "./client.model";
import { NbToastrService } from '@nebular/theme';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.scss']
})
export class AddclientComponent implements OnInit {
  // @HostBinding('class')
  // classes = 'example-items-rows';
  // @Input() inputData:any;
  // data:any;
  // message:string;
  client: ClientModel;
  index: number;
  // selectedItemNgModel;
  // selectedItem = '2';

  constructor(public http: HttpClient,
    private router: Router,
    private toastrService: NbToastrService,
    private route: ActivatedRoute) { 
      this.client=new ClientModel()
    }
   showToast(position, status,message) {
      this.index += 1;
      this.toastrService.show(
        status || 'Success',
        message,
        { position, status });
    }
    
  ngOnInit() {
    // if(this.inputData){
    //   this.client=this.inputData
    // }else{
    //   this.client=new ClientModel()
    // }
 
  }
  allclient()
{
  debugger
  this.http.post('http://localhost:3000/Client/create', this.client)
  
      .subscribe(response => {
        debugger
        this.router.navigate(["pages/client/allclient/"]);
        this.showToast('top-right', 'success','added successfully');
        console.log(response);
      }, (err) => {
        this.showToast('top-right', 'danger', err.message);
       console.log ('Oooops!',err);
      });
  }
  uploadImage(mediaFiles:any) {
    // if (mediaFiles && mediaFiles.length > 0) {
      let apiCall: Array<any> = [];
      debugger
      // for (let i = 0; i < mediaFiles.length; i++) {
        let formData: FormData = new FormData();
        formData.append("file", mediaFiles.target.files[0]);

        let uploadFilePath = environment.backendUrl + '/file';
        this.http.post(uploadFilePath, formData).subscribe((res:any)=>{
          console.log("success",res);
          this.client.image = res.filePath;
          return res;
        },err=>{
          console.log("err",err)
          return err
        })
  }

}