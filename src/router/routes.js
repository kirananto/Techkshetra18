import Home from '@/components/Home'
import Sponsors from '@/components/Sponsors'
import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'
import Events from '@/components/Events'
import Autoshow from '@/components/Autoshow'
import Workshops from '@/components/Workshops'
import Registration from '@/components/Registration'


const routes = [
  { path: '/',
    component: Home
  },
  { path: '/sponsors',
    component: Sponsors
  },
  { path: '/aboutus',
    component: AboutUs
  },
  { path: '/contact',
    component: ContactUs
  },
  { path: '/events',
    component: Events
  },
  { path: '/autoshow',
    component: Autoshow
  },
  { path: '/workshops',
    component: Workshops
  },
  { path: '/registration/:id',
    component: Registration,
    props: true
  }]

export default routes
