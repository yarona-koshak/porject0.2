using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

class Program
{
  static void Main()
  {
    int port = 5000;
    User[] users = [];
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

          if (request.Path == "signUp")
          {
            (string userName, string password) = request.GetBody<(string, string)>();
            string userId = Guid.NewGuid().ToString();
            users = [.. users, new User(userName, password,userId)];
            
            Console.WriteLine(userName + " ," + password);
            response.Send(userId);
          }
          else if (request.Path == "login")
          {
            (string userName, string password) = request.GetBody<(string, string)>();
            string? userId = null;
            for (int i = 0; i < users.Length; i++)
            {
              if (userName == users[i].userName && password == users[i].password)
              {
                userId = users[i].id;
              }
            }
            response.Send(userId);
          }
          else if (request.Path == "userExists")
          {
            bool userExists = false;

            string userId = request.GetBody<string>();
            for (int i=0; i<users.Length;i++){
              if (users[i].id==userId){
                userExists=true;
              }
            }
            response.Send(userExists);
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
class User
{
  public string userName;

  public string password;
  public string id;
  public User(string userName, string password, string id)
  {
    this.userName = userName;
    this.password = password;
    this.id = id;


  }
}