
from django.contrib import admin
from django.urls import path, include
from events.views import *
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView



urlpatterns = [
    path('admin/', admin.site.urls),
     path('', TemplateView.as_view(template_name='index.html')),
    path(('users/'), include('users.urls')),

    path('events/', EventList, name = "events"),

    path('create-event/', CreateEvent, name = "create-event"),

    path('orders/', OrderList, name = "orders"),

    path('create-order/', OrderEvent, name = "create-order"),


    path('event/<str:pk>', EventDetail, name = "event-detail"),

]


if settings.DEBUG:  # new
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)