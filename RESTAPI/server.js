//we can also use var or let in place of const
const express = require('express');
const { ROUTE_CONSTANTS } = require('./helpers/route_constants');


//adding body parser
const bodyParser=require('body-parser');

const app=express();

//syntax : route, callback function


app.use(bodyParser.urlencoded({extended: false}));
//parse application/ json
app.use(bodyParser.json());

app.get(ROUTE_CONSTANTS.DEFAULT, function(req,res){
        res.send("<h1>Welcome to Default Page</h1>");
});

app.get(ROUTE_CONSTANTS.GET_LOGIN,function(req,res){
    res.sendFile(__dirname+'/pages/login.html');
});

// Here we added a new post function.
app.post(ROUTE_CONSTANTS.POST_LOGIN,function(req,res){
  console.log(req.body);
  res.send("Logged In");
});

app.get(ROUTE_CONSTANTS.GET_REGISTER,function(req,res){
    res.sendFile(__dirname+'/pages/register.html');
});


app.post(ROUTE_CONSTANTS.POST_REGISTER,function(req,res){
        console.log(req.body);
        res.send("Successfully registered.");
});

app.get(ROUTE_CONSTANTS.GET_PRODUCTS,function(req,res){

        const productsData=[
        [
            {
              "_id": "5f5860a32e2792a9ac7c50b7",
              "index": 0,
              "guid": "c8251ad2-388e-4a23-9a28-790acb7839e9",
              "isActive": false,
              "balance": "$1,042.92",
              "picture": "http://placehold.it/32x32",
              "age": 33,
              "eyeColor": "blue",
              "name": "Augusta Hodge",
              "gender": "female",
              "company": "REALYSIS",
              "email": "augustahodge@realysis.com",
              "phone": "+1 (931) 470-2435",
              "address": "474 Jerome Avenue, Utting, Oregon, 9840",
              "about": "Velit veniam sit commodo nulla occaecat cillum excepteur dolor qui aute mollit enim excepteur. Sunt ullamco amet do ad. Eu ea aliquip reprehenderit eu nulla aliquip laborum adipisicing. Commodo qui voluptate aliqua aliquip adipisicing eu ipsum culpa adipisicing adipisicing mollit dolore ut occaecat. Id nulla minim proident deserunt anim in qui nostrud officia mollit veniam id. Aliqua reprehenderit est occaecat sint incididunt exercitation fugiat pariatur anim est labore do consectetur.\r\n",
              "registered": "2018-12-17T07:08:45 -06:-30",
              "latitude": 18.314509,
              "longitude": 76.96702,
              "tags": [
                "aliquip",
                "reprehenderit",
                "elit",
                "est",
                "magna",
                "exercitation",
                "veniam"
              ],
              "friends": [
                {
                  "id": 0,
                  "name": "Ramirez Dixon"
                },
                {
                  "id": 1,
                  "name": "Lacy Singleton"
                },
                {
                  "id": 2,
                  "name": "Evangelina Potts"
                }
              ],
              "greeting": "Hello, Augusta Hodge! You have 3 unread messages.",
              "favoriteFruit": "strawberry"
            },
            {
              "_id": "5f5860a3c56694e941686efb",
              "index": 1,
              "guid": "7ec7c127-691d-4a00-a4a0-d93450cac7c2",
              "isActive": false,
              "balance": "$2,053.06",
              "picture": "http://placehold.it/32x32",
              "age": 34,
              "eyeColor": "brown",
              "name": "Humphrey Olson",
              "gender": "male",
              "company": "OTHERWAY",
              "email": "humphreyolson@otherway.com",
              "phone": "+1 (996) 441-2617",
              "address": "436 Brigham Street, Alleghenyville, Montana, 4164",
              "about": "Do sunt dolore ipsum adipisicing non ut exercitation elit dolor amet do reprehenderit cupidatat. Consectetur pariatur aute id sit in mollit ad duis eu qui nulla voluptate anim. Laborum pariatur ut consectetur pariatur laboris deserunt et adipisicing irure quis consequat. Aliqua ad quis qui duis fugiat eu labore eiusmod laborum ad nulla pariatur. Ullamco mollit magna qui eiusmod tempor aliquip elit est duis qui aliquip reprehenderit. Eu ullamco occaecat adipisicing dolor ut in nostrud.\r\n",
              "registered": "2018-05-08T06:06:49 -06:-30",
              "latitude": -17.592729,
              "longitude": -14.571275,
              "tags": [
                "labore",
                "enim",
                "ex",
                "non",
                "est",
                "exercitation",
                "ullamco"
              ],
              "friends": [
                {
                  "id": 0,
                  "name": "Reed Walker"
                },
                {
                  "id": 1,
                  "name": "Payne Page"
                },
                {
                  "id": 2,
                  "name": "Lilly Sims"
                }
              ],
              "greeting": "Hello, Humphrey Olson! You have 3 unread messages.",
              "favoriteFruit": "banana"
            },
            {
              "_id": "5f5860a319d5bbe579d13d48",
              "index": 2,
              "guid": "20847212-5d1c-4ccc-ae11-002b767cfc4e",
              "isActive": false,
              "balance": "$3,945.01",
              "picture": "http://placehold.it/32x32",
              "age": 33,
              "eyeColor": "green",
              "name": "Alexandra Collier",
              "gender": "female",
              "company": "MUSANPOLY",
              "email": "alexandracollier@musanpoly.com",
              "phone": "+1 (981) 451-2202",
              "address": "529 Henderson Walk, Hardyville, Georgia, 3041",
              "about": "Nulla eiusmod anim ea id magna proident eiusmod amet reprehenderit fugiat irure consequat elit. Quis deserunt aliqua laborum et quis laborum quis Lorem voluptate deserunt duis irure. Consectetur non eu Lorem irure officia sunt nisi sint.\r\n",
              "registered": "2017-04-23T12:29:15 -06:-30",
              "latitude": -76.970695,
              "longitude": -118.029504,
              "tags": [
                "deserunt",
                "exercitation",
                "consectetur",
                "cupidatat",
                "excepteur",
                "minim",
                "elit"
              ],
              "friends": [
                {
                  "id": 0,
                  "name": "Bird Lawson"
                },
                {
                  "id": 1,
                  "name": "Shanna Valencia"
                },
                {
                  "id": 2,
                  "name": "Queen Duncan"
                }
              ],
              "greeting": "Hello, Alexandra Collier! You have 2 unread messages.",
              "favoriteFruit": "banana"
            },
            {
              "_id": "5f5860a37ffc776967d97078",
              "index": 3,
              "guid": "576eb705-66c6-4004-9380-d989f6ba80ff",
              "isActive": false,
              "balance": "$3,120.19",
              "picture": "http://placehold.it/32x32",
              "age": 35,
              "eyeColor": "green",
              "name": "Patricia Steele",
              "gender": "female",
              "company": "CONJURICA",
              "email": "patriciasteele@conjurica.com",
              "phone": "+1 (912) 496-3260",
              "address": "989 Court Street, Cashtown, Kansas, 9137",
              "about": "Deserunt commodo ullamco eu pariatur est cupidatat. Fugiat commodo irure anim id do aliquip cillum. Eiusmod irure ex ad Lorem. Laborum veniam velit labore eu aliquip veniam laboris anim magna fugiat cupidatat veniam. Commodo dolor dolore sit eu.\r\n",
              "registered": "2014-03-17T01:58:04 -06:-30",
              "latitude": -20.351358,
              "longitude": 137.9432,
              "tags": [
                "ex",
                "nostrud",
                "cupidatat",
                "voluptate",
                "ea",
                "sunt",
                "ex"
              ],
              "friends": [
                {
                  "id": 0,
                  "name": "Roslyn Benson"
                },
                {
                  "id": 1,
                  "name": "Louella Blevins"
                },
                {
                  "id": 2,
                  "name": "Gutierrez Barry"
                }
              ],
              "greeting": "Hello, Patricia Steele! You have 1 unread messages.",
              "favoriteFruit": "apple"
            },
            {
              "_id": "5f5860a3bfa98e4acdae505a",
              "index": 4,
              "guid": "fe2c5e7e-99fe-4a33-b8ef-64a3e3ff3107",
              "isActive": true,
              "balance": "$2,021.73",
              "picture": "http://placehold.it/32x32",
              "age": 34,
              "eyeColor": "blue",
              "name": "Middleton Juarez",
              "gender": "male",
              "company": "DIGIGENE",
              "email": "middletonjuarez@digigene.com",
              "phone": "+1 (969) 455-2655",
              "address": "993 Bevy Court, Caledonia, Iowa, 7631",
              "about": "Est elit exercitation ad ullamco enim incididunt esse amet aliquip quis occaecat. Sit excepteur in exercitation ex ea. In anim voluptate aute in laborum excepteur officia dolor reprehenderit ut anim fugiat.\r\n",
              "registered": "2016-12-17T09:19:34 -06:-30",
              "latitude": 57.717938,
              "longitude": 136.113708,
              "tags": [
                "dolore",
                "sit",
                "velit",
                "laborum",
                "adipisicing",
                "enim",
                "velit"
              ],
              "friends": [
                {
                  "id": 0,
                  "name": "Blackburn Brooks"
                },
                {
                  "id": 1,
                  "name": "Puckett Boyle"
                },
                {
                  "id": 2,
                  "name": "David Bright"
                }
              ],
              "greeting": "Hello, Middleton Juarez! You have 5 unread messages.",
              "favoriteFruit": "apple"
            }
          ]
    ];
    res.json(productsData);
});

// new page is created.
app.get(ROUTE_CONSTANTS.GET_FILE,function(req,res){
    res.sendFile(__dirname+"/files/demo.pdf");

});    


app.listen(3000);