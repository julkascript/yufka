import "./App.css";
import Nav from "./components/Nav";
import SongHero from "./components/SongHero";
import SongLyrics from "./components/SongLyrics";

function App() {
  return (
    <div className="App">
      <Nav />
      <SongHero />
      <SongLyrics lyrics={daBaby} />
    </div>
  );
}

const daBaby = `[Intro]
Pooh, you a fool for this one
Ha
Oh Lord, Jetson made another one

[Chorus]
Hah
Pack in the mail, it's gone (Uh)
She like how I smell, cologne (Yeah)
I just signed a deal, I'm on
Yeah, yeah
I go where I want, I'm good (Good)
Play if you want, let's do it (Ha)
I'm a young CEO, Suge (Yeah)
Yeah, yeah

[Verse 1]
The first nigga play, I'ma body a nigga (Ha)
I just checked my balance
I'll probably pull up to your hood
And come buy me a nigga (No cap)
You know that your ho told you that nigga crazy
Don't think that she lied to you, nigga (Bitch)
Get caught with your ho when I'm poppin' 'em both
Now they high just like Bobby and Whitney (Haa)
Say I'm the goat, act like I don't know
But fuck it, I'm obviously winnin'
Don't make me go hit the bank and take out a hundred
To show you our pockets are different (Ha)
I'm out with your bitch and I only want knowledge
She got a lil' mileage, I'm chillin' (Uh)
You disrespect me and I'll beat your ass up
All in front of your partners and children (Ahh, ahh)
I'm the type to let a nigga think that I'm broke
Until I pop out with a million (I pop)
Take 20K and put that on your head
And make one of your partners come kill you (Yeah)
Say he fuckin' with me then he gotta grow up
'Cause this nigga gotta be kiddin' (Kiddin')
This shit, it can't fit in my pocket
I got it, like I hit the lottery, nigga (Hot, hot, hot)
Opp, I'll slap the shit out a nigga
No talkin', I don't like to argue with niggas (I don't)
Ain't gon' be no more laughin'
You see me whip out 'cause I'm gon' be done shot me a nigga (No cap)
I don't follow no bitches on IG
But all of your bitches, they follow a nigga (Ha)
And that lil' nigga ain't gon' shoot shit with that gun
He just pull it out in his pictures (Bitch, uh)

[Chorus]
Hah
Pack in the mail, it's gone (Uh)
She like how I smell, cologne (Yeah)
I just signed a deal, I'm on
Yeah, yeah
I go where I want, I'm good (Good)
Play if you want, let's do it (Ha)
I'm a young CEO, Suge (Yeah)
Yeah, yeah
Hah
Pack in the mail, it's gone (Uh)
She like how I smell, cologne (Yeah)
I just signed a deal, I'm on
Yeah, yeah
I go where I want
I'm good (Good)
Play if you want, let's do it (Ha)
I'm a young CEO, Suge (Yeah)
Yeah, yeah`;

export default App;
