import tweepy
import time
from random import randint
import requests
from requests.packages.urllib3.exceptions import InsecureRequestWarning

requests.packages.urllib3.disable_warnings(InsecureRequestWarning)

execfile("TWITTER_CREDENTIALS.py")


auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
auth.set_access_token(ACCESS_TOKEN, ACCESS_TOKEN_SECRET)

api = tweepy.API(auth)


def limit_handled(cursor):
	while True:
		try:
			time.sleep(randint(2,6))
			yield cursor.next()
			
		except tweepy.RateLimitError:
			t = randint(15,25)
			print("Waiting " + str(t) + " Minutes")
			time.sleep(t * 60)

for follower in limit_handled(tweepy.Cursor(api.followers, screen_name="runnersworld").items()):
	print follower.screen_name
	follower.follow()
