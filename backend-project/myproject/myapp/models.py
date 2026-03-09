from django.db import models


class UserProfile(models.Model):
    name = models.CharField( max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField( max_length=100)

def __str__(self):
    return self.name
    


class Order(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    street = models.CharField(max_length=255)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    zipcode = models.CharField(max_length=20)
    country = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    subtotal = models.FloatField()
    delivery_fee = models.FloatField(default=2.0)
    total = models.FloatField()
    



    def __str__(self):
        return f"Order by {self.first_name} - {self.total}"
    





