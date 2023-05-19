from django.db import models


class Balance(models.Model):
    amount = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"Balance: {self.amount}"


class Transaction(models.Model):
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.CharField(max_length=255)
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"Transaction: {self.amount}"