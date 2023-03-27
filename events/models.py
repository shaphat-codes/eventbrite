from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Event(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE) 
    title = models.CharField(max_length=200)
    start_time = models.CharField(max_length=200, default="")
    start_date = models.CharField(max_length=200, default="")
    end_date = models.CharField(max_length=200, default="")
    end_time = models.CharField(max_length=200, default="")
    organizer = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    location = models.CharField(max_length=100, default="")
    ticket_price = models.CharField(max_length=100)
    image = models.CharField(max_length=100000)


    def __str__(self):
        return f'{self.title} event'
    

class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    title = models.CharField(max_length=200, blank=True)
    start_time = models.CharField(max_length=200,blank=True)
    start_date = models.CharField(max_length=200, blank=True)
    end_date = models.CharField(max_length=200, blank=True)
    end_time = models.CharField(max_length=200, blank=True)
    organizer = models.CharField(max_length=100, blank=True)
    description = models.CharField(max_length=100, blank=True)
    location = models.CharField(max_length=100, blank=True)
    ticket_price = models.CharField(max_length=100, blank=True)
    image = models.CharField(max_length=100000, blank=True)
    owner = models.PositiveIntegerField(blank=True)


    def save(self, *args, **kwargs):
        self.title = self.event.title
        self.start_time = self.event.start_time
        self.end_time = self.event.end_time
        self.start_date = self.event.start_date
        self.end_date = self.event.end_date
        self.organizer = self.event.organizer
        self.description = self.event.description
        self.location = self.event.location
        self.ticket_price = self.event.ticket_price
        self.image = self.event.image
        self.owner = self.event.user.id
 
        
     

        super().save(*args, **kwargs)

    def __str__(self):
        return f'{self.user.email} order'


