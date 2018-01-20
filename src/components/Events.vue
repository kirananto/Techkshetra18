<template>
  <div class="hello">
    <h1>EVENTS</h1>
     <div class="container-fluid">
      <br>
        <div v-for="(event,index) in events" :key='index' class="col-md-3 offset-md-1 card">
            <h3>{{event.name}}</h3>
        </div>
    
      <div class="main-grid">
				<ul id="og-grid" class="og-grid">
					<li>
						<a href="" data-largesrc="images/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.">
							<img src="/static/images/thumbs/1.jpg" alt="img01"/>
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="images/2.jpg" data-title="Veggies sunt bona vobis" data-description="Komatsuna prairie turnip wattle seed artichoke mustard horseradish taro rutabaga ricebean carrot black-eyed pea turnip greens beetroot yarrow watercress kombu.">
							<img src="/static/images/thumbs/2.jpg" alt="img02"/>
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="images/3.jpg" data-title="Dandelion horseradish" data-description="Cabbage bamboo shoot broccoli rabe chickpea chard sea lettuce lettuce ricebean artichoke earthnut pea aubergine okra brussels sprout avocado tomato.">
							<img src="/static/images/thumbs/3.jpg" alt="img03"/>
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="images/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.">
							<img src="/static/images/thumbs/1.jpg" alt="img01"/>
						</a>
					</li>
					<li>
						<a href="" data-largesrc="images/2.jpg" data-title="Veggies sunt bona vobis" data-description="Komatsuna prairie turnip wattle seed artichoke mustard horseradish taro rutabaga ricebean carrot black-eyed pea turnip greens beetroot yarrow watercress kombu.">
							<img src="/static/images/thumbs/2.jpg" alt="img02"/>
						</a>
					</li>
					<li>
						<a href="" data-largesrc="images/3.jpg" data-title="Dandelion horseradish" data-description="Cabbage bamboo shoot broccoli rabe chickpea chard sea lettuce lettuce ricebean artichoke earthnut pea aubergine okra brussels sprout avocado tomato.">
							<img src="/static/images/thumbs/3.jpg" alt="img03"/>
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="images/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.">
							<img src="/static/images/thumbs/1.jpg" alt="img01"/>
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="images/2.jpg" data-title="Veggies sunt bona vobis" data-description="Komatsuna prairie turnip wattle seed artichoke mustard horseradish taro rutabaga ricebean carrot black-eyed pea turnip greens beetroot yarrow watercress kombu.">
							<img src="/static/images/thumbs/2.jpg" alt="img02"/>
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="images/3.jpg" data-title="Dandelion horseradish" data-description="Cabbage bamboo shoot broccoli rabe chickpea chard sea lettuce lettuce ricebean artichoke earthnut pea aubergine okra brussels sprout avocado tomato.">
							<img src="/static/images/thumbs/3.jpg" alt="img03"/>
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="images/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.">
							<img src="/static/images/thumbs/1.jpg" alt="img01"/>
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="images/2.jpg" data-title="Veggies sunt bona vobis" data-description="Komatsuna prairie turnip wattle seed artichoke mustard horseradish taro rutabaga ricebean carrot black-eyed pea turnip greens beetroot yarrow watercress kombu.">
							<img src="/static/images/thumbs/2.jpg" alt="img02"/>
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="images/3.jpg" data-title="Dandelion horseradish" data-description="Cabbage bamboo shoot broccoli rabe chickpea chard sea lettuce lettuce ricebean artichoke earthnut pea aubergine okra brussels sprout avocado tomato.">
							<img src="/static/images/thumbs/3.jpg" alt="img03"/>
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="images/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.">
							<img src="/static/images/thumbs/1.jpg" alt="img01"/>
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="images/2.jpg" data-title="Veggies sunt bona vobis" data-description="Komatsuna prairie turnip wattle seed artichoke mustard horseradish taro rutabaga ricebean carrot black-eyed pea turnip greens beetroot yarrow watercress kombu.">
							<img src="/static/images/thumbs/2.jpg" alt="img02"/>
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="images/3.jpg" data-title="Dandelion horseradish" data-description="Cabbage bamboo shoot broccoli rabe chickpea chard sea lettuce lettuce ricebean artichoke earthnut pea aubergine okra brussels sprout avocado tomato.">
							<img src="/static/images/thumbs/3.jpg" alt="img03"/>
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="images/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.">
							<img src="/static/images/thumbs/1.jpg" alt="img01"/>
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="images/2.jpg" data-title="Veggies sunt bona vobis" data-description="Komatsuna prairie turnip wattle seed artichoke mustard horseradish taro rutabaga ricebean carrot black-eyed pea turnip greens beetroot yarrow watercress kombu.">
							<img src="/static/images/thumbs/2.jpg" alt="img02"/>
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="images/3.jpg" data-title="Dandelion horseradish" data-description="Cabbage bamboo shoot broccoli rabe chickpea chard sea lettuce lettuce ricebean artichoke earthnut pea aubergine okra brussels sprout avocado tomato.">
							<img src="/static/images/thumbs/3.jpg" alt="img03"/>
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="images/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.">
							<img src="/static/images/thumbs/1.jpg" alt="img01"/>
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="images/2.jpg" data-title="Veggies sunt bona vobis" data-description="Komatsuna prairie turnip wattle seed artichoke mustard horseradish taro rutabaga ricebean carrot black-eyed pea turnip greens beetroot yarrow watercress kombu.">
							<img src="/static/images/thumbs/2.jpg" alt="img02"/>
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="images/3.jpg" data-title="Dandelion horseradish" data-description="Cabbage bamboo shoot broccoli rabe chickpea chard sea lettuce lettuce ricebean artichoke earthnut pea aubergine okra brussels sprout avocado tomato.">
							<img src="/static/images/thumbs/3.jpg" alt="img03"/>
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="images/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.">
							<img src="/static/images/thumbs/1.jpg" alt="img01"/>
						</a>
					</li>
					<li>
						<a href="" data-largesrc="images/2.jpg" data-title="Veggies sunt bona vobis" data-description="Komatsuna prairie turnip wattle seed artichoke mustard horseradish taro rutabaga ricebean carrot black-eyed pea turnip greens beetroot yarrow watercress kombu.">
							<img src="/static/images/thumbs/2.jpg" alt="img02"/>
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="images/3.jpg" data-title="Dandelion horseradish" data-description="Cabbage bamboo shoot broccoli rabe chickpea chard sea lettuce lettuce ricebean artichoke earthnut pea aubergine okra brussels sprout avocado tomato.">
							<img src="/static/images/thumbs/3.jpg" alt="img03"/>
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="images/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.">
							<img src="/static/images/thumbs/1.jpg" alt="img01"/>
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="images/2.jpg" data-title="Veggies sunt bona vobis" data-description="Komatsuna prairie turnip wattle seed artichoke mustard horseradish taro rutabaga ricebean carrot black-eyed pea turnip greens beetroot yarrow watercress kombu.">
							<img src="/static/images/thumbs/2.jpg" alt="img02"/>
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="images/3.jpg" data-title="Dandelion horseradish" data-description="Cabbage bamboo shoot broccoli rabe chickpea chard sea lettuce lettuce ricebean artichoke earthnut pea aubergine okra brussels sprout avocado tomato.">
							<img src="/static/images/thumbs/3.jpg" alt="img03"/>
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="images/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.">
							<img src="/static/images/thumbs/1.jpg" alt="img01"/>
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="images/2.jpg" data-title="Veggies sunt bona vobis" data-description="Komatsuna prairie turnip wattle seed artichoke mustard horseradish taro rutabaga ricebean carrot black-eyed pea turnip greens beetroot yarrow watercress kombu.">
							<img src="/static/images/thumbs/2.jpg" alt="img02"/>
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="images/3.jpg" data-title="Dandelion horseradish" data-description="Cabbage bamboo shoot broccoli rabe chickpea chard sea lettuce lettuce ricebean artichoke earthnut pea aubergine okra brussels sprout avocado tomato.">
							<img src="/static/images/thumbs/3.jpg" alt="img03"/>
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="images/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.">
							<img src="/static/images/thumbs/1.jpg" alt="img01"/>
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="images/2.jpg" data-title="Veggies sunt bona vobis" data-description="Komatsuna prairie turnip wattle seed artichoke mustard horseradish taro rutabaga ricebean carrot black-eyed pea turnip greens beetroot yarrow watercress kombu.">
							<img src="/static/images/thumbs/2.jpg" alt="img02"/>
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="images/3.jpg" data-title="Dandelion horseradish" data-description="Cabbage bamboo shoot broccoli rabe chickpea chard sea lettuce lettuce ricebean artichoke earthnut pea aubergine okra brussels sprout avocado tomato.">
							<img src="/static/images/thumbs/3.jpg" alt="img03"/>
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="images/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.">
							<img src="/static/images/thumbs/1.jpg" alt="img01"/>
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="images/2.jpg" data-title="Veggies sunt bona vobis" data-description="Komatsuna prairie turnip wattle seed artichoke mustard horseradish taro rutabaga ricebean carrot black-eyed pea turnip greens beetroot yarrow watercress kombu.">
							<img src="/static/images/thumbs/2.jpg" alt="img02"/>
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="images/3.jpg" data-title="Dandelion horseradish" data-description="Cabbage bamboo shoot broccoli rabe chickpea chard sea lettuce lettuce ricebean artichoke earthnut pea aubergine okra brussels sprout avocado tomato.">
							<img src="/static/images/thumbs/3.jpg" alt="img03"/>
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="images/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.">
							<img src="/static/images/thumbs/1.jpg" alt="img01"/>
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="images/2.jpg" data-title="Veggies sunt bona vobis" data-description="Komatsuna prairie turnip wattle seed artichoke mustard horseradish taro rutabaga ricebean carrot black-eyed pea turnip greens beetroot yarrow watercress kombu.">
							<img src="/static/images/thumbs/2.jpg" alt="img02"/>
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="images/3.jpg" data-title="Dandelion horseradish" data-description="Cabbage bamboo shoot broccoli rabe chickpea chard sea lettuce lettuce ricebean artichoke earthnut pea aubergine okra brussels sprout avocado tomato.">
							<img src="/static/images/thumbs/3.jpg" alt="img03"/>
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="images/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.">
							<img src="/static/images/thumbs/1.jpg" alt="img01"/>
						</a>
					</li>
				</ul>
				
			</div>
		</div><!-- /container -->
     
  </div>
</template>

<script>
export default {
  name: 'Events',
  data () {
    return {
      events: [
      {
        name: 'Amazing Race',
        photoURL: '',
        eventid: 1234
      }]
    }
  },
  mounted () {
    //TODO code to fetch event details from firestore on mounting app
  }
}
</script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
		<script src="/static/js/grid.js"></script>
			<script>
			$(function() {
				Grid.init();
				// adding more items
				$('#og-additems').on( 'click', function() {
					var $items = $( '<li><a href="#" data-largesrc="/static/images/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot."><img src="/static/images/thumbs/1.jpg" alt="img01"/></a></li><li><a href="http://cargocollective.com/jaimemartinez/" data-largesrc="/static/images/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot."><img src="/static/images/thumbs/1.jpg" alt="img01"/></a></li><li><a href="http://cargocollective.com/jaimemartinez/" data-largesrc="/static/images/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot."><img src="/static/images/thumbs/1.jpg" alt="img01"/></a></li><li><a href="http://cargocollective.com/jaimemartinez/" data-largesrc="/static/images/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot."><img src="/static/images/thumbs/1.jpg" alt="img01"/></a></li><li><a href="http://cargocollective.com/jaimemartinez/" data-largesrc="/static/images/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot."><img src="/static/images/thumbs/1.jpg" alt="img01"/></a></li><li><a href="http://cargocollective.com/jaimemartinez/" data-largesrc="/static/images/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot."><img src="/static/images/thumbs/1.jpg" alt="img01"/></a></li><li><a href="http://cargocollective.com/jaimemartinez/" data-largesrc="/static/images/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot."><img src="/static/images/thumbs/1.jpg" alt="img01"/></a></li><li><a href="http://cargocollective.com/jaimemartinez/" data-largesrc="/static/images/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot."><img src="/static/images/thumbs/1.jpg" alt="img01"/></a></li><li><a href="http://cargocollective.com/jaimemartinez/" data-largesrc="/static/images/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot."><img src="/static/images/thumbs/1.jpg" alt="img01"/></a></li><li><a href="http://cargocollective.com/jaimemartinez/" data-largesrc="/static/images/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot."><img src="/static/images/thumbs/1.jpg" alt="img01"/></a></li>' ).appendTo( $( '#og-grid' ) );
					Grid.addItems( $items );
					return false;
				} );
			});
		</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  font-family:'Samarkan Normal';
  font-size:5rem;
  color:#D6D0D0;
}
.card {
  background-color: white;
  border-radius: 1rem;
  height: 10rem;
}

.hello {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%,-50%);
  width: 100%;
  height: 100%;

}
/* TEST */
.og-grid {
	list-style: none;
	padding: 20px 0;
	margin: 0 auto;
	text-align: center;
	width: 100%;
}

.og-grid li {
	display: inline-block;
	margin: 10px 5px 0 5px;
	vertical-align: top;
	height: 250px;
}

.og-grid li > a,
.og-grid li > a img {
	border: none;
	outline: none;
	display: block;
	position: relative;
}

.og-grid li.og-expanded > a::after {
	top: auto;
	border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
	border-bottom-color: #ddd;
	border-width: 15px;
	left: 50%;
	margin: -20px 0 0 -15px;
}

.og-expander {
	position: absolute;
	background: #ddd;
	top: auto;
	left: 0;
	width: 100%;
	margin-top: 10px;
	text-align: left;
	height: 0;
	overflow: hidden;
}

.og-expander-inner {
	padding: 50px 30px;
	height: 100%;
}

.og-close {
	position: absolute;
	width: 40px;
	height: 40px;
	top: 20px;
	right: 20px;
	cursor: pointer;
}

.og-close::before,
.og-close::after {
	content: '';
	position: absolute;
	width: 100%;
	top: 50%;
	height: 1px;
	background: #888;
	-webkit-transform: rotate(45deg);
	-moz-transform: rotate(45deg);
	transform: rotate(45deg);
}

.og-close::after {
	-webkit-transform: rotate(-45deg);
	-moz-transform: rotate(-45deg);
	transform: rotate(-45deg);
}

.og-close:hover::before,
.og-close:hover::after {
	background: #333;
}

.og-fullimg,
.og-details {
	width: 50%;
	float: left;
	height: 100%;
	overflow: hidden;
	position: relative;
}

.og-details {
	padding: 0 40px 0 20px;
}

.og-fullimg {
	text-align: center;
}

.og-fullimg img {
	display: inline-block;
	max-height: 100%;
	max-width: 100%;
}

.og-details h3 {
	font-weight: 300;
	font-size: 52px;
	padding: 40px 0 10px;
	margin-bottom: 10px;
}

.og-details p {
	font-weight: 400;
	font-size: 16px;
	line-height: 22px;
	color: #999;
}

.og-details a {
	font-weight: 700;
	font-size: 16px;
	color: #333;
	text-transform: uppercase;
	letter-spacing: 2px;
	padding: 10px 20px;
	border: 3px solid #333;
	display: inline-block;
	margin: 30px 0 0;
	outline: none;
}

.og-details a::before {
	content: '\2192';
	display: inline-block;
	margin-right: 10px;
}

.og-details a:hover {
	border-color: #999;
	color: #999;
}

.og-loading {
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background: #ddd;
	box-shadow: 0 0 1px #ccc, 15px 30px 1px #ccc, -15px 30px 1px #ccc;
	position: absolute;
	top: 50%;
	left: 50%;
	margin: -25px 0 0 -25px;
	-webkit-animation: loader 0.5s infinite ease-in-out both;
	-moz-animation: loader 0.5s infinite ease-in-out both;
	animation: loader 0.5s infinite ease-in-out both;
}

@-webkit-keyframes loader {
	0% { background: #ddd; }
	33% { background: #ccc; box-shadow: 0 0 1px #ccc, 15px 30px 1px #ccc, -15px 30px 1px #ddd; }
	66% { background: #ccc; box-shadow: 0 0 1px #ccc, 15px 30px 1px #ddd, -15px 30px 1px #ccc; }
}

@-moz-keyframes loader {
	0% { background: #ddd; }
	33% { background: #ccc; box-shadow: 0 0 1px #ccc, 15px 30px 1px #ccc, -15px 30px 1px #ddd; }
	66% { background: #ccc; box-shadow: 0 0 1px #ccc, 15px 30px 1px #ddd, -15px 30px 1px #ccc; }
}

@keyframes loader {
	0% { background: #ddd; }
	33% { background: #ccc; box-shadow: 0 0 1px #ccc, 15px 30px 1px #ccc, -15px 30px 1px #ddd; }
	66% { background: #ccc; box-shadow: 0 0 1px #ccc, 15px 30px 1px #ddd, -15px 30px 1px #ccc; }
}

@media screen and (max-width: 830px) {

	.og-expander h3 { font-size: 32px; }
	.og-expander p { font-size: 13px; }
	.og-expander a { font-size: 12px; }

}

@media screen and (max-width: 650px) {

	.og-fullimg { display: none; }
	.og-details { float: none; width: 100%; }
	
}
/* General Demo Style */
@import url(http://fonts.googleapis.com/css?family=Lato:300,400,700);

html { height: 100%; }

*,
*:after,
*:before {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	padding: 0;
	margin: 0;
}

/* Clearfix hack by Nicolas Gallagher: http://nicolasgallagher.com/micro-clearfix-hack/ */
.clearfix:before,
.clearfix:after {
    content: " ";
    display: table;
}

.clearfix:after {
    clear: both;
}

.clearfix {
    *zoom: 1;
}

body {
    font-family: 'Lato', Calibri, Arial, sans-serif;
    background: #f9f9f9;
   
    color: #333;
    overflow: scroll;
    overflow-x: hidden;
}

a {
	color: #555;
	text-decoration: none;
}

.container {
	width: 100%;
	position: relative;
}

.container > header {
	width: 90%;
	max-width: 1240px;
	margin: 0 auto;
	position: relative;
	padding: 0 30px 50px 30px;
}

.container > header {
	padding: 60px 30px 50px;
	text-align: center;
}

.container > header h1 {
	font-size: 34px;
	line-height: 38px;
	margin: 0 auto;
	font-weight: 700;
	color: #333;
}

.container > header h1 span {
	display: block;
	font-size: 20px;
	font-weight: 300;
}

.main-grid > p {
	text-align: center;
	padding: 50px 20px;
}

/* Header Style */
.codrops-top {
	line-height: 24px;
	font-size: 11px;
	background: #fff;
	background: rgba(255, 255, 255, 0.5);
	text-transform: uppercase;
	z-index: 9999;
	position: relative;
	box-shadow: 1px 0px 2px rgba(0,0,0,0.2);
}

.codrops-top a {
	padding: 0px 10px;
	letter-spacing: 1px;
	color: #333;
	display: inline-block;
}

.codrops-top a:hover {
	background: rgba(255,255,255,0.8);
	color: #000;
}

.codrops-top span.right {
	float: right;
}

.codrops-top span.right a {
	float: left;
	display: block;
}
</style>
