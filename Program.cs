using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

class Program
{
  static void Main()
  {
    int port = 5000;
    int num = 0;
    string[] userNamesArr=[];
    string[] passwordArr=[];
    string[] ids=[];
    var server = new Server(port);

    Console.WriteLine("The server is running");
    Console.WriteLine($"Main Page: http://localhost:{port}/website/pages/index.html");

    while (true)
    {
      (var request, var response) = server.WaitForRequest();
      Console.WriteLine("Got a request: " + request.Path);

      if (File.Exists(request.Path))
      {
        var file = new File(request.Path);
        response.Send(file);
      }
      else if (request.ExpectsHtml())
      {
        var file = new File("website/pages/404.html");
        response.SetStatusCode(404);
        response.Send(file);
      }
      else
      {
        try
        {
          
          
          if (request.Path == "message")
          {
            
            string text = request.GetBody<string>();
            Console.WriteLine("Recieved '" + text + "' from the clint!");
          }
          else if (request.Path=="signUp"){
            (string userName, string password) = request.GetBody<(string,string)>();
            userNamesArr=[..userNamesArr,userName];
            passwordArr=[..passwordArr,password];
            ids=[..ids,Guid.NewGuid().ToString()];
            Console.WriteLine(userName+" ,"+ password);

          }
          else if (request.Path=="login"){
            (string userName, string password) = request.GetBody<(string,string)>();
            bool foundUser= false;
            string userId= "";
            for (int i =0; i<userNamesArr.Length;i++){
            if(userName == userNamesArr[i]){
              foundUser= true;
              userId=ids[i];
            }
            }
            response.Send((foundUser,userId));
          }
          else if (request.Path=="getUserName"){
            string userId=request.GetBody<string>();
            int i=0;
            while ( ids[i]!=userId){
              i++;
            }
            string userName =userNamesArr[i];
            response.Send(userName);
        }
        }
        catch (Exception exception)
        {
          Log.WriteException(exception);
        }
      }
      response.Close();
    }
  }
}