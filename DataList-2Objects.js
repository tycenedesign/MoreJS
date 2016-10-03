//Literal notation

var friends = {};
friends.bill = {
    firstName: "Bill",
    lastName: "Gates",
    number: "(205) 555-5555",
    address: ['One Microsoft Way','Denver', 'CO', '20020']
    };
friends.steve = {
    firstName: "Steve",
    lastName: "Jobs",
    number: "(213) 123-55555",
    address: ['1 loop drive', 'San Clemente', 'CA', '22323']
    };


//Object constructor

var friends = new Object();

friends.bill = new Object();
friends.steve = new Object();


friends.bill.firstName = 'Bill';
friends.bill.lastName = 'Gates';
friends.bill.number = '(215) 505-4500';
friends.bill.address = 'One Microsoft Way', 'Redmond', 'WA', '98052';


friends.steve.firstName = 'Steve';
friends.steve.lastName = 'Katz';
friends.steve.number = '(250) 902-0011';
friends.steve.address = '2900 Hollywood Way', 'Burbank', 'CA', '91505';


var list = function(friends){
    for(var key in friends){
        console.log(key);
        }
    };

var search = function(name){
    for(var key in friends){
        if(friends[key].firstName === name){
            console.log(friends[key]);
            return friends[key];
        }
      
    }
};

list(friends);
search("Bill");
