class Person{
    constructor(name='', gender='', age=0,...others){
        this.name = name;
        this.gender = gender;
        this.age = age;

        (() =>{
            console.log('random');
    
        })();
    }

    works(){
        console.log('WAT : -D');

    }
    static sleeps(){
        console.log(`${arguments[0].name} sleeping ...zzzz...`);

    }
}
class Employee extends Person{
    constructor(name='', gender = '', age=0, ...others){
        super(name, gender, age,...others);
        this.empId=0;
        this.designation='';
        this.salary=0;
    }
    works(){
        super.works();
        console.log(`${this.name} is working as ${this.designation} for Software Products division`);
    }
}
let Varsha = new Person('Varsha', 'female', 25);
Varsha.works();
Person.sleeps(Varsha)

let Suraj = new Employee('Suraj', 'male', 26);
Suraj.designation = 'Associate Developers';
Suraj.works();

class Database{
    constructor(dbname='', server='', type='', ...others){
        this.dbname=dbname;
        this.server=server;
        this.type=type;
    }
    connect(){
        console.log('Connection is successful with the connection string')       
    }
}
class Dbops extends Database{
    constructor(dbname='', server='', type=0, ...others){
        super(dbname='', server='', type=0, ...others)
        super.connect();   
    }
    createTable(tableName,[...tableColumns])

    {
              console.log( `${tableName}`);

            for (const col of tableColumns) {
                console.log(`${Object.keys(col)[0]} | ${Object.values(col)[0]}`);      
              }
    }
    execute(storedName,...params)
    {
        var paramString='';
        for(const param of params)
        {
            paramString = paramString+ ' \' '+param + ' \' ,';
        }
        console.log(`exec ${storedName}  ${paramString} `)
    }
}

let AmtPlans= new Dbops('Amtplans','ST', 'SqlServer');
AmtPlans.createTable('Organisation',[{id:'int'},{designation:'string'}]);

AmtPlans.execute('spName','12','developer')