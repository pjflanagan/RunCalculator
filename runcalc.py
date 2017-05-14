import tweepy
import time
from random import randint
import sys


execfile("TWITTER_CREDENTIALS.py")

auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
auth.set_access_token(ACCESS_TOKEN, ACCESS_TOKEN_SECRET)

api = tweepy.API(auth)

def delay():
	t = randint(15,25)
	print("=== Waiting " + str(t) + " Minutes ===")
	time.sleep(t * 60)

def limit_handled(cursor):
	while True:
		try:
			time.sleep(randint(2,6))
			yield cursor.next()
			
		except tweepy.RateLimitError:
			delay();


i = 0

for follower in limit_handled(tweepy.Cursor(api.followers, screen_name="runnersworld").items()):
	try:
		if(i % 15 == 0):
			delay()
			
		print(follower.screen_name)
		follower.follow()
		i += 1
		
	except tweepy.TweepError:
		delay()
		continue
		
	except StopIteration:
		break
