type Image = {
  src: string
  thumbnail: string
  title: string
}

const ABUNDANCE_PATH = '/portfolio/abundancetracker'
const ABUNDANCE = [
  {
    src: `${ABUNDANCE_PATH}/at-product.PNG`,
    thumbnail: '',
    title: 'Product Page'
  },
  {
    src: `${ABUNDANCE_PATH}/at-product2.PNG`,
    thumbnail: '',
    title: 'Product Page - Dataset'
  },
  {
    src: `${ABUNDANCE_PATH}/at-product3.PNG`,
    thumbnail: '',
    title: 'Product Page - View Record'
  },
  {
    src: `${ABUNDANCE_PATH}/at-product4.PNG`,
    thumbnail: '',
    title: 'Product Page - Update Record'
  },
  {
    src: `${ABUNDANCE_PATH}/at-product5.PNG`,
    thumbnail: '',
    title: 'Product Page - Export Dataset to Excel or CSV'
  },
  {
    src: `${ABUNDANCE_PATH}/at-report.PNG`,
    thumbnail: '',
    title: 'Report Page'
  },
  {
    src: `${ABUNDANCE_PATH}/at-report2.PNG`,
    thumbnail: '',
    title: 'Contact Page'
  },
  {
    src: `${ABUNDANCE_PATH}/at-report3.PNG`,
    thumbnail: '',
    title: 'Contact Page - View History part1'
  }
] as Image[]

export default function (selectedProject: string): Image[] {
  const result = []

  switch (selectedProject) {
    case 'abundance':
      result.push(...ABUNDANCE)
      break

    default:
      break
  }

  return result
}
