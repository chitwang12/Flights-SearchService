## instructions for how to run sequelize cli 


## Initialize the seuqlize instance 
 npx sequelize init    

## Create the Db 
npx sequelize db:create 


## generate model / table 
npx sequelize model:generate --name City --attributes name:String 

## migrate the changes to db 
npx sequelize db:migrate 
