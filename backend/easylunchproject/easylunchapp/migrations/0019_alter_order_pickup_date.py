# Generated by Django 5.1.3 on 2024-11-24 11:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('easylunchapp', '0018_order_pickup_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='pickup_date',
            field=models.DateTimeField(default='YYYY-MM-DD-HH:MM:SS'),
        ),
    ]