var Input=document.getElementById('Password');
var Intro=document.getElementById('intro');
var Note=document.getElementById('note');
var Message=document.querySelector('.message');
var br=document.getElementById('br');

function checkAns()
{
	var num=Number(Input.value);
	var Ans=0;
	Ans=num;
	if(Ans==33432433)
	{
		Input.type='hidden';
		Intro.innerHTML='';
		Note.innerHTML='';
		br.innerHTML='';
		Message.innerHTML="Dear Brian:<br>First of all, congrats for solving my puzzle!<br>Hope you enjoy it!<br>In a blink of an eye, more than three years had passed since we first met on PaGamO.<br>I still can\'t forget how we discussed our strategy, how we fought together, how we started chatting, and how I later on grew eager in waiting for another message of yours every day.<br>Ever since we were in contact, I couldn't help having a crush on you. However, I knew the timing wasn't right. I decided it was better to wait for you to realize, though in the meantime, I couldn't help wondering if I'm not of any importance to you at all.<br>There was such a long time in between, in which I believed everything was over. Or, I probably should never have even started daydreaming. But fortunately, fate brought us together again.<br>I never could've imagined things would turn out this way. So much has happened in between that it's sometimes hard to tell whether I'm dreaming or not.<br>All I know is that I'm really lucky to get a second chance, and I'm not gonna let it go this time, now that I'm pretty sure you're the missing piece of my puzzle. You're just the exact perfect, ideal person I've always dreamed of meeting. You're the first person who can actually get me. Thank you, for making me whole.<br>Speaking of which, there are uncountable things I have to thank you for. Every time I'm feeling down, you are there for me. Always there to bring me comfort. You always bring me a lot of laughter, too. Thank you so much for accompanying me through the hard times, even when we weren't able to meet in person. Thank you for setting a great example for me to follow, while also making me realize and correct my wrongs.<br>I hope we can celebrate each birthday together, live through our lives together, and grow old together. I hope I get to love you forever.<br>I love you sooo much.<br>Last but not least,<br>Happy 19th Birthday!<br>Affectionately,<br>1100";
	}
}
document.addEventListener('keydown', function(evt)
{
	if(evt.code=='Enter')
	{
		checkAns();
		return;
	}
})