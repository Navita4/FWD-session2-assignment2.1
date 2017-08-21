function Student(name,rollno){
    this.name=name;
    this.rollno=rollno;
    this.SayName=function(){
        console.log("My name is:+this.name");
    }
}
    let stud1=new Student("stud1",12);
    console.log("stud1");
    stud1.SayName();