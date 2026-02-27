import type { IImage } from '@/types'

const ABUNDANCE_PATH = '/portfolio/abundancetracker'
const ABUNDANCE = [
  {
    src: `${ABUNDANCE_PATH}/at-product.png`,
    thumbnail: '',
    title: 'Product Page'
  },
  {
    src: `${ABUNDANCE_PATH}/at-product2.png`,
    thumbnail: '',
    title: 'Product Page - Dataset'
  },
  {
    src: `${ABUNDANCE_PATH}/at-product3.png`,
    thumbnail: '',
    title: 'Product Page - View Record'
  },
  {
    src: `${ABUNDANCE_PATH}/at-product4.png`,
    thumbnail: '',
    title: 'Product Page - Update Record'
  },
  {
    src: `${ABUNDANCE_PATH}/at-product5.png`,
    thumbnail: '',
    title: 'Product Page - Export Dataset to Excel or CSV'
  },
  {
    src: `${ABUNDANCE_PATH}/at-report.png`,
    thumbnail: '',
    title: 'Report Page'
  },
  {
    src: `${ABUNDANCE_PATH}/at-report2.png`,
    thumbnail: '',
    title: 'Contact Page'
  },
  {
    src: `${ABUNDANCE_PATH}/at-report3.png`,
    thumbnail: '',
    title: 'Contact Page - View History part1'
  }
] as IImage[]

const WEBCLASSAI_PATH = '/portfolio/webclassai'
const WEBCLASSAI = [
  {
    src: `${WEBCLASSAI_PATH}/lp-oneclick.png`,
    thumbnail: '',
    title: 'Landing Page - One Click'
  },
  {
    src: `${WEBCLASSAI_PATH}/lp-registration.png`,
    thumbnail: '',
    title: 'Landing Page - Registration'
  },
  {
    src: `${WEBCLASSAI_PATH}/ty.png`,
    thumbnail: '',
    title: 'Thank You Page'
  }
]

const BOTWEBINAR_PATH = '/portfolio/botwebinar'
const BOTWEBINAR = [
  {
    src: `${BOTWEBINAR_PATH}/lp.png`,
    thumbnail: '',
    title: 'Landing Page'
  },
  {
    src: `${BOTWEBINAR_PATH}/lp-registration.png`,
    thumbnail: '',
    title: 'Landing Page - Registration'
  },
  {
    src: `${BOTWEBINAR_PATH}/ty.png`,
    thumbnail: '',
    title: 'Thank You Page'
  }
]

const INVENTORY_PATH = '/portfolio/inventory'
const INVENTORY = [
  {
    src: `${INVENTORY_PATH}/it-pos.png`,
    thumbnail: '',
    title: 'POS - Landing Page'
  },
  {
    src: `${INVENTORY_PATH}/it-pos-lookup.png`,
    thumbnail: '',
    title: 'POS - Lookup Page'
  },
  {
    src: `${INVENTORY_PATH}/it-pos-amount.png`,
    thumbnail: '',
    title: 'POS - Tender Amount'
  },
  {
    src: `${INVENTORY_PATH}/it-pos-sales.png`,
    thumbnail: '',
    title: 'POS - Sales'
  },
  {
    src: `${INVENTORY_PATH}/it-admin-products.png`,
    thumbnail: '',
    title: 'Admin - Products'
  },
  {
    src: `${INVENTORY_PATH}/it-admin-categories.png`,
    thumbnail: '',
    title: 'Admin - Categories'
  },
  {
    src: `${INVENTORY_PATH}/it-admin-sales.png`,
    thumbnail: '',
    title: 'POS - Sales'
  }
]

const NODEDATA_PATH = '/portfolio/nodedata'
const NODEDATA = [
  {
    src: `${NODEDATA_PATH}/nd_light_overview.png`,
    thumbnail: '',
    title: 'NodeData Doc Overview - Light Mode'
  },
  {
    src: `${NODEDATA_PATH}/nd_light_ip.png`,
    thumbnail: '',
    title: 'NodeData Doc IP - Light Mode'
  },
  {
    src: `${NODEDATA_PATH}/nd_light_email.png`,
    thumbnail: '',
    title: 'NodeData Doc Email - Light Mode'
  },
  {
    src: `${NODEDATA_PATH}/nd_dark_overview.png`,
    thumbnail: '',
    title: 'NodeData Doc Overview - Dark Mode'
  },
  {
    src: `${NODEDATA_PATH}/nd_dark_ip.png`,
    thumbnail: '',
    title: 'NodeData Doc IP - Dark Mode'
  },
  {
    src: `${NODEDATA_PATH}/nd_dark_email.png`,
    thumbnail: '',
    title: 'NodeData Doc Email - Dark Mode'
  }
]

const FINANCEEER_PATH = '/portfolio/financeeer'
const FINANCEEER = [
  {
    src: `${FINANCEEER_PATH}/fnc-login.png`,
    thumbnail: '',
    title: 'Financeeer Login'
  },
  {
    src: `${FINANCEEER_PATH}/fnc-debts.png`,
    thumbnail: '',
    title: 'Financeeer Debt'
  },
  {
    src: `${FINANCEEER_PATH}/fnc-debt-paid.png`,
    thumbnail: '',
    title: 'Financeeer Payments'
  },
  {
    src: `${FINANCEEER_PATH}/fnc-debt-closed.png`,
    thumbnail: '',
    title: 'Financeeer Debt Paid'
  }
]

const VPNDATA_PATH = '/portfolio/vpndata'
const VPNDATA = [
  {
    src: `${VPNDATA_PATH}/vpndata_light.png`,
    thumbnail: '',
    title: 'VPNData IO - Light Mode'
  },
  {
    src: `${VPNDATA_PATH}/vpndata_dark.png`,
    thumbnail: '',
    title: 'VPNData IO - Dark Mode'
  }
]

export default function (selectedProject: string): IImage[] {
  const result = []

  switch (selectedProject) {
    case 'abundance':
      result.push(...ABUNDANCE)
      break
    case 'webclassai':
      result.push(...WEBCLASSAI)
      break
    case 'botwebinar':
      result.push(...BOTWEBINAR)
      break
    case 'inventory':
      result.push(...INVENTORY)
      break
    case 'vpndata':
      result.push(...VPNDATA)
      break
    case 'nodedata':
      result.push(...NODEDATA)
      break
    case 'financeeer':
      result.push(...FINANCEEER)
      break
  }

  return result
}
