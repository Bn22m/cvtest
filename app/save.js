/* 
 * 2018
 * CV test
 * save.js
 */

'use strict';

var namet;
var emailt;
var messaget;
var mlistt = [];
var mylist2;
var reqt;
var tt, dd, mm, yy, hh, ii, ss ;
var indext = new Date();
var lbl;
//alert("1, Start: "+ indext);

function update()
{
    namet = document.contact_us.name.value;
    emailt = document.contact_us.email.value;
    messaget = document.contact_us.message.value;
}

function saveForm()
{
    //alert("5, Saving...");
    //namet = document.contact_us.name.value;
    //emailt = document.contact_us.email.value;
    //messaget = document.contact_us.message.value;
    update();
    tt = indext.getTime();
    dd = indext.getDate();
    mm = indext.getMonth();
    yy = indext.getFullYear();
    hh = indext.getHours();
    ii = indext.getMinutes();
    ss = indext.getMilliseconds();
    saveFile();
    //alert("9, Saved..."+tt);
}

function saveFile()
{
    var xx = indext+" "+hh+" "+ii+" "+ss;
    //alert("6, Indext: "+xx);
    mylist2 = emailt+" # "+namet+" # "+messaget+" # "+tt;
    mlistt.push(mylist2);
    storeContact(indext);
}

function storeContact(sindex)
{
    //alert("7, Storage: "+tt);
    console.log("saving new message: index: "+sindex);
    //alert("8, Storage: "+"log"+yy+" "+tt);
}

//Almost finished.
//Add the interested visitor to Trello.

function addVisitor(name2, email2, message2)
{
    
	//alert("10, Visitor...");
	var idlist1 = '5a4b3c4cbe0188ca9c0b2059';
    var token1 = 'ae4a73cb0e40c46f6e642f5f7429394534b35e3b5a4c7c21438e5389eec20497';
    ///////////////////////////////////////////////////////////////////////////////////
    //var key1 = '6eb508bda626ff893db446eff50d0066';
    //
    //<script src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
    //<script src="https://api.trello.com/1/client.js?key=key1"></script>
    //included @ index.html
    //////////////////////////////////////////////////////////////////////////////////////
    //
    
    Trello.setToken(token1);
    
    var destinationList = idlist1;
    
    var success = function(successMsg){
        asyncOutput(successMsg);
    };
    
    var error = function(errorMsg){
        asyncOutput(errorMsg);
    };
    
    var newCard = {
        name: email2,
        desc: name2+" # "+message2+" # "+tt,
        pos: "iop",
        due: null,
        idList: destinationList
    };
    
    Trello.post('/cards/', newCard, success, error);
	//////////////////////////////////////////////////
    var i = mlistt.length;
    var message3 = mlistt[i-1].toString();
    console.log(message3);
    //alert("10b, Message: "+ message3);
	//alert("10c, Success: "+success);
	//alert("10d, Error: "+error);
	console.log("Success: "+success+" "+"Error: "+error);
	//alert("10e, Done");
    
};

function init(){
    
    //alert("3, init...");
    document.getElementById("btnSave").onclick = function(){
        //alert("4b, Saving...inprogress.");
        saveForm();
    };
    
    document.getElementById("btnSend").onclick = function(){
        //alert("4a, Sending...message.");
        saveForm();
        addVisitor(namet, emailt, messaget);
    };
	
	document.getElementById("name").onchange = function(event){
        namet = document.contact_us.name.value;
        //alert(namet);
        document.getElementById("lblName").value = "Name";
        if(namet === "")
        {
            //alert("What is your name?");
            document.getElementById("lblName").hidden = true;
        }
        else
        {
            document.getElementById("lblName").hidden = false;
        }
				
	};
    
    document.getElementById("email").onchange = function(event){
        emailt = document.contact_us.email.value;
        //alert(emailt);
        document.getElementById("lblEmail").value = "Email";
        if(emailt === "")
        {
            //alert("What is your email?");
            document.getElementById("lblEmail").hidden = true;
        }
        else
        {
            document.getElementById("lblEmail").hidden = false;
        }
        
    };
    
    document.getElementById("message").onchange = function(){
        messaget = document.contact_us.message.value;
        //alert(messaget);
        document.getElementById("lblMessage").value = "Message";
        if(messaget === "")
        {
            //alert("What is your message?");
            document.getElementById("lblMessage").hidden = true;
        }
        else
        {
            document.getElementById("lblMessage").hidden = false;   
        }
				
	};
       
};

window.onload = function(){
    init();
};

//
//Done.
//
//alert("2, Done: "+ indext);
//