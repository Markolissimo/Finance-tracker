from django.shortcuts import render
from .models import Balance, Transaction
import matplotlib.pyplot as plt


def profile(request):
    transactions = Transaction.objects.order_by('-date')[:3]
    context = {
        'transactions': transactions
    }
    return render(request, 'profile.html', context)


def balance(request):
    balance = Balance.objects.first()
    return render(request, 'profile.html', {'balance': balance.amount})


def transactions(request):
    transactions = Transaction.objects.all()
    return render(request, 'profile.html', {'transactions': transactions})


def chart(request):
    # Retrieve data for the chart (e.g., transaction amounts)
    transactions = Transaction.objects.all()
    transaction_amounts = [transaction.amount for transaction in transactions]

    # Create the chart
    plt.plot(transaction_amounts)
    plt.xlabel('Transaction')
    plt.ylabel('Amount')
    plt.title('Transaction Amounts Over Time')

    # Save the chart to a temporary file
    chart_path = 'path/to/save/chart.png'
    plt.savefig(chart_path)

    return render(request, 'finance_tracker/chart.html', {'chart_path': chart_path})