export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

// line one in this file is exporting the class ValidationError which extends the Error
// in line two the constructor is defined with a parameter message of type string
// in line three the super method is called with the message parameter
// the super method job is to call the constructor of the parent class which is Error
// in line four the name property of the ValidationError class is set to "ValidationError"
