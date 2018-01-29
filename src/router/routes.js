import Home from '@/components/Home'
import Sponsors from '@/components/Sponsors'
import ContactUs from '@/components/ContactUs'
import MainEvents from '@/components/MainEvents'
import Events from '@/components/Events'
import Autoshow from '@/components/Autoshow'
import Workshops from '@/components/Workshops'
import QRCode from '@/components/QRCode'


const routes = [
  { path: '/',
    component: Home
  },
  { path: '/sponsors',
    component: Sponsors
  },
  { path: '/contact',
    component: ContactUs
  },
  { path: '/events',
    component: MainEvents
  },
  { path: '/autoshow',
    component: Autoshow
  },
  { path: '/workshops',
    component: Workshops
  },
  { path: '/event/:branch',
    component: Events,
    props: true
  },
  { path: '/qrcode',
    component: QRCode
  }]

export default routes
