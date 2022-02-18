# Saty_Trend - Trend label based on an EMA Cloud
# By Saty (2021)
# Author is not responsible for your trading using this script.
# Data provided in this script is not financial advice.
#
# Green = Bullish Trend, above cloud
# Red = Bearish Trend, below cloud
# YELLOW = Chop / No Clear Trend, within cloud
#
# How to use:
# Add one instance of SM_Trend for each
# Timeframe and/or EMA cloud you would like.
# Note you can only add SM_Trend for timeframes
# at or above then current timeframe.
#
# Example:
# Add 1 instance of SM_Trend(10m, 34, 50) 
# Shows you if price action is bullish
# or bearish, based on the trend cloud,
# on a 10m timeframe.

declare upper;

input period = AggregationPeriod.DAY;
input cloudEMALow = 34;
input cloudEMAHigh = 50;

# Determine if we are above or below the EMA cloud
def price = close(period = period);
def bullish = price >= MovAvgExponential(price, cloudEMALow) and price >= MovAvgExponential(price, cloudEMAHigh);
def bearish = price <= MovAvgExponential(price, cloudEMALow) and price <= MovAvgExponential(price, cloudEMAHigh);

AddLabel(yes, (if period == AggregationPeriod.MONTH then "M" 
else
if period == AggregationPeriod.WEEK then "W" 
else
if period == AggregationPeriod.FOUR_DAYS then "4D" 
else
if period == AggregationPeriod.THREE_DAYS then "3D" 
else
if period == AggregationPeriod.TWO_DAYS then "2D" 
else
if period  == AggregationPeriod.DAY then "D" 
else
if period == AggregationPeriod.FOUR_HOURS then "4H" 
else
if period == AggregationPeriod.TWO_HOURS then "2H" 
else
if period == AggregationPeriod.HOUR then "60m"
else 
if period == AggregationPeriod.THIRTY_MIN then "30m" 
else 
if period == AggregationPeriod.TWENTY_MIN then "20m" 
else 
if period  == AggregationPeriod.FIFTEEN_MIN then "15m"
else
if period == AggregationPeriod.TEN_MIN then "10m" 
else
if period == AggregationPeriod.FIVE_MIN then "5m" 
else
if period == AggregationPeriod.FOUR_MIN then "4m" 
else
if period  == AggregationPeriod.THREE_MIN then "3m" 
else
if period == AggregationPeriod.TWO_MIN then "2m" 
else
if period  == AggregationPeriod.MIN then "1m" 
else "") + " Trend " , if bullish then Color.GREEN else if bearish then Color.RED else Color.ORANGE);
