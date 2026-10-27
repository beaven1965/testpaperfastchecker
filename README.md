# TestPaper FastChecker — setup steps for Beaven

One small website with two pages:

| Address | File | What it is |
|---|---|---|
| `/` | `index.html` | The sales page (VSL landing page) |
| `/app/` | `app/index.html` | The app teachers use |

## Put it online (one time, about 10 minutes)

1. Make a new GitHub repo called `testpaperfastchecker` and upload everything in this folder.
2. In Netlify: **Add new site → Import from GitHub → testpaperfastchecker**. Leave the build settings empty. Deploy.
3. In Netlify: **Site configuration → Change site name** → `testpaperfastchecker`. Your address becomes `https://testpaperfastchecker.netlify.app`.

## Fill in your details (open `app/index.html`, the box at the top of the script)

- `gcashNumber` and `gcashName`
- `contactEmail` (make a `testpaperfastchecker@gmail.com` and forward it to your Desk, like your other apps)
- `messenger` (your Beavs App Facebook Page)
- Also change the email at the bottom of `index.html`.

## Let the app accept your SE- load codes

The app checks codes with your ScitechLectureTool server, so one code system serves both apps.

1. In the **scitechlecturetool** repo, open `netlify/functions/verify-code.js`.
2. At the top, in the CORS list where the FreelancePay address is, add `https://testpaperfastchecker.netlify.app`.
3. Commit. Codes you make on **/admin/** now work in TestPaper FastChecker too.

## Add the sales video

Record the video (script in `vsl-script.md`), name it `promo.mp4`, and upload it to the main folder. Until then the page says "The video is coming soon".

## When you change the app later

Open `sw.js` and change `tpfastchecker-v1` to `tpfastchecker-v2` (then v3, and so on), so phones get the new version.

## Good to know

- Free papers: 50 per phone, then ₱99 loads of 300 papers for 60 days (`price`, `loadPapers`, `loadDays`) (`freePapers` in the settings box). The counter is kept on the phone, so clearing Chrome's data resets it. Fine for now; a server counter can come later.
- Learners' names and scores never leave the phone.
- Item analysis levels: 75% and up = Mastered, 50–74% = Nearly mastered, below 50% = Least mastered (`mastered` and `nearly` in the settings box).

## The load (how it works in the app)

- Price now: ₱99 launch promo (regular ₱149). When the promo ends: in `app/index.html` set `price: '₱149'` and `regularPrice: ''`; in `index.html` change ₱99 to ₱149 and remove the "Launch promo" line. Then bump the `sw.js` version.

- One SE- code from /admin/ = 300 papers that end after 60 days, whichever comes first. The 60 days start when the teacher types the code.
- The papers left are counted on the phone. A code still works on up to 2 phones (your server's rule), so one teacher could get 300 papers on each phone. Fine for now.
- Teachers should type the code within 30 days of getting it, because your server's codes expire after 30 days.

## Pages added later

- `/pay/` — How to pay (GCash steps, invite program). Put your GCash number and name in `pay/index.html` too (look for `09XX XXX XXXX` and `B. B.`).
- `/terms/` — Terms of Use and Privacy Notice. Read it once and change anything you want.
- In the app: ⚙ Settings → My load, Back up my data, Restore, links, Delete all data.
- Invite program: for every 2 teachers who buy a first load with an invite code, the inviter gets 1 free load. The order message the app copies includes "My invite code" and "Invited by", so you can track it on your Beavs Apps Desk and send the free code by hand.
