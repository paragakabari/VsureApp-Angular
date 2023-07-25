import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-documents',
  templateUrl: './my-documents.component.html',
  styleUrls: ['./my-documents.component.scss']
})
export class MyDocumentsComponent implements OnInit {

  imageForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.imageForm = this.formBuilder.group({
      imageFile: [null] // FormControl for the image file
    });
  }

  onFileChange(event) {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imageForm.patchValue({
          imageFile: reader.result // Set the base64 string to the form control
        });
      };
    }
  }

  onSubmit() {
    // Handle form submission and send the base64 image string
    const base64Image = this.imageForm.get('imageFile').value;
    console.log('Base64 Image:', base64Image);
    // Call API or perform any other action with the base64 image
  }
}