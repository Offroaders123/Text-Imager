# Text-Imager

A format to represent text as images!

I've wanted to work on this project for a few years now, maybe since my early coding days! I think it was inspired by a demo about images/text when I was using Code.org in AP CSP in high school.

The premise for my demo at least, is that I initially thought it would be cool if you could store text in an image, and be able to decode that again when you want to read what it says. It isn't quite the same as I thought back then, because the actual technical part behind RGBA values is that it won't always line up with text characters, and there has to be some way to handle each RGB value, and the A also.

So, rather, I'm going to make it so you can generate images using text, in the way that it will be a data format that holds Unicode text inside of the RGBA image format. And it's not like secret file metadata or anything, it will actually be what dictates how the image looks, the bytes for the Unicode text itself.

My idea for this is that it would be cool to see what a piece of text may look like as an image. Maybe you could generate artwork this way. Ooh, that brings up the next question, I wonder how that works with copyright? I'm not going to test that myself, I still wonder it though. If you are simply displaying another person's work in a different format, is that different enough to count as your own work? What a weird dilemma. So say if you took the lyrics of a song, and converted it into an image, would that be your image, or that of the person who wrote the lyrics? Because the image looks the way it does based on how they wrote the lyrics. I could see strong arguments for both points of view.

Watched this whole video about Web Workers today, it was a fun one!
https://www.youtube.com/watch?v=X57mh8tKkgE

I think it was part of what made me think about looking into this idea again. I think I tried to do it a while back, but I didn't know enough about the Canvas API nor TypedArrays yet, so it didn't make sense to me as to how I should set things up for it. Now I see multiple ways that could be neat to do it this way!

I think it will kind of work similar to how my RLE parser and NBTify work, where it's like a tape that you feed through the parser, and it maps out a mirror copy of the same data structure, just in the other format. That also seems like how DNA and mRNA work, if I remember right (Googled it, I think yeah!).
https://www.nature.com/scitable/topicpage/translation-dna-to-mrna-to-protein-393/

TAG_Compound appears to be like how UAA, UAG, and UGA work, haha.