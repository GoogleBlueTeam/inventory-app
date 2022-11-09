Blue Man Group (aka Jared, Mario, Francis)'s Inventory App!
This is a full-stack application that tracks items, with the feature to add and update items!

https://bluemangroup.up.railway.app/

## Getting Started

1. `npm install`
2. `npm run seed`
3. `npm run server-dev`
4. In a seperate terminal, `npm run client-dev`


# App Outlook
![](mainpage.png)
![](addform.png)

# Postman testing
Testing delete route, item with id 20 was successfully removed from the list
![](DELETE-request-deleting-item.png)

Testing GET route for all items, and was successful in retrieving the full list of items
![](GET-request-all-items.png)

Testing the GET route to our localhost, was also successful
![](GET-request-to-localhost-3000.png)

Testing POST route, successfully able to add an item, in this case it was a red shirt and it populated as the item with id 22.
![](POST-request-adding-a-new-item.png)

Testing PUT route, successfully able to update an item on the list, in this case item with id 1 had the title change to test the update.
![](PUT-request-updating-item.png)
