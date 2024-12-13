# Generated by Django 5.1.3 on 2024-11-23 17:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('easylunchapp', '0012_alter_order_product_quantities'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='product_quantities',
        ),
        migrations.AddField(
            model_name='order',
            name='quantity',
            field=models.PositiveIntegerField(default=1),
        ),
    ]