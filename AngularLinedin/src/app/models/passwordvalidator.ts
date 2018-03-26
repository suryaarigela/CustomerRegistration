
import { Validator, FormControl, ValidationErrors } from '@angular/forms';

export class PasswordValidator {

  constructor() { }

  static validateMe(c: FormControl): ValidationErrors {

    let regexp = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"),
                            
    test = regexp.test(c.value);
 console.log('test :::'+test +" with value "+c.value);
   
    const message = {
      'password': {
        'message': 'Invalid Format' // Will changes the error defined in errors helper.
      }
    };
   
   
    return test ? null : message;
   
   
}
}