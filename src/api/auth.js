export class auth{
    constructor(email,password) {
        this.email = email;
        this.password=password
      }
     login(){
        var res=fetch('http://grgenback.herokuapp.com/userauth/login/',{
            method:"POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                // "Content-Type": "multipart/form-data",
            },
            body:"email=test&password=1a2b3c4d"
        })
        var data =res.json()
        console.log(data)
    }
}