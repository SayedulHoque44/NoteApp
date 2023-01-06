# A Complete Website Making Algorithom With Data.

## Step 01 : (App 01)-(Routing)

    1.Protothome Main Page Gula Create krte hbe.

    2.Page Joto Tuku Sombob Sajai nite hbe.jmn Proti page e Navbar thakte pare tai setar jonno sei babe Component Create krte hbe.

    3.npm i react-router-dom , ebabe Router install krte hbe termial e

    4.Erpor Proti ta page e Routing krte hbe.

    5.npm i styled-components

### `Learn :`

        1.(Router,Routes,Route)- Router er bitore Routes er bitore Route gula rakhte hbe jegula nijer modde route krbe jekono akta show krbe
        2.(Link,to ={/path} ,) - Link er maddome clcik er maddome route kra jay tar path thik kra jay,
        3.(Link,to ={path/${id}} ,) - Link er maddome abr id o send kra jay path er page e,
        4.(useParams()) - useParams() diye sei id catch kra hy,
        5.(Link,state={object} ,) - Link er maddome abr object/strings o send kra jay path er page e,
        6.(useLocation()) -  useLocation() er maddome sei object catch kra hy, {const location.state = useLocation()}
        7.(<Outlet/>) - <Outlet /> er maddome amra private route create krte pari,
        8.(<Navigate />) - <Navigate /> er maddome amra kono condtion er upor auto path create kre navigate krte pari,
        navigate eo Link er mto To/state sob kra jay,jmn ta Link e kra jay,

### Deploy React App in GitHub

    step 01 : Add 1 line in package.json > in before name in the {} breacket "homepage": "https://gituserName.github.io/repoName",
    step02 : add also 2 line in package.json > in scripts{} "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
    step03 : go to terminal and : npm i --save gh-pages
    step04 : again write: npm run deploy , in brnch the name gh-pages will create ,than add to it live link
