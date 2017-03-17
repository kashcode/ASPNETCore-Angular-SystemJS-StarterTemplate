# Angular ASP.NET CORE WebAPI Starter Template

This is a starter template for developing Angular with ASP.NET Core WebAPI Applications.

This template is done with npm. Its an Angular application with an http-service getting values from an ASP.NET CORE WebAPI.

## Blogpost

[Angular and ASP.NET Core Starter](http://offering.solutions/blog/articles/2016/01/25/angular-2-asp-net-core-starter/)

## Start

Start by typing

`npm install`

at the level of the "package.json" file

### Option 1

Now you can just press "play" inside Visual Studio to get started.

If you change the *.ts-files you need to run the `tsc` command manually.

### Option 2

`npm start` will run the gulp task for you, starting the lite-server, the dotnet server and the tsc-watcher.


### Distribution

`npm run dist` will run the gulp task for distribution, so it will build the app and place it in the wwwroot folder. You can now serve it with `npm run lite`.

TO start the backend type `dotnet run`

See this nice link which the Angular team did by working with Visual Studio and Angular [Visual Studio 2015 QuickStart
](https://angular.io/docs/ts/latest/cookbook/visual-studio-2015.html)

![alt text](.github/03bff784-213f-4836-be3c-7288a33396a3.jpg "Screenshot")
