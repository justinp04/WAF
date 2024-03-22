# Workshop 3
## URL Parameters
As we know, the `urls.py` file handles mapping between functiosn and URL requests, URL parameters are a wa to pass information about an interaction through a URL.\
An example of this is:\
> `/start/` in the URL `https://www.djangoproject.com/start/`

In the `urls.py` file, we can define url parameters as such:\
> `path('\<int:book\>', views.detail, name = 'books_detail')

- '\<int:book\>' takes in the parameter, **book**, and defines it as an integer
- 'views.detail' is the method called when this parameter is detected. This method can be found in the views.py file.
- 'name = 'books_detail'' is the name of the parameter.

## Rendering a view
In the `views.py` file, make the method:
> `def details(request, book_id):\
> &nbsp;&nbsp;&nbsp;&nbsp;book = Bok.objects.get(id=book_id)\
> &nbsp;&nbsp;&nbsp;&nbsp;return render(request, 'detail.htm', {'book': book})

What this method does is that it wil render 'detail.html' into the webpage when it is called.

## Using POST instead of GET
POST is another way to achieve the same goal and having dynamic HTML appear.

## Error handling
You can get many error codes when working with front-end applications and it is important that these errors are handled correctly.\
To handle these errors, we can go to the `views.py` file and import the class `get_object_or_404' which will raise a 404 error code in the event that the page could not be found.

### Global error handling
Global error handling is possible if we put handlers in the `urls.py` file in the Project. 

## APIs
A RESTful API is just an API that makes use of GET, PUT, POST, and DELETE HTTP Requests.

Tastypie is a web service API framework for Django, makes exposing your models easy, but it gives you full control over what you expose and lets you abstract away the model as much as needed. 