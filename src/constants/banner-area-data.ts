import { HeroSec, FeaturedItem, SliderItem, FeaturedItemWithImage, FeaturedItemCheck } from './types';

export const heroSec: HeroSec = {
  title: '최고의 실력을 가진 \n 외국인 인재를 찾고 계신가요?',
  description: '법률 및 인사관리 부담없이 \n 1주일 이내에 원격으로 채용해보세요',
};

export const featuredList: FeaturedItem[] = [
  {
    title: '평균 월 120만원',
    description: '임금을 해당 국가를 기준으로 계산합니다.',
  },
  {
    title: '최대 3회 인력교체',
    description: '막상 채용해보니 맞지 않아도 걱정하지 마세요.',
  },
  {
    title: '평균 3일, 최대 10일',
    description: '급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.',
  },
];

export const sliderList: SliderItem[] = [
  {
    id: 1,
    image: '/images/profile-pic.png',
    name: 'Abhishek Gupta',
    description: '마케팅',
    years: '2y+',
    skillsets: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
  },
  {
    id: 2,
    image: '/images/profile-pic.png',
    name: 'Jane Smith',
    description: '마케팅 · 2y+',
    years: '2y+',
    skillsets: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
  },
  {
    id: 3,
    image: '/images/profile-pic.png',
    name: 'Alice Johnson',
    description: '마케팅 · 2y+',
    years: '2y+',
    skillsets: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
  },
];

export const featuredItemList: FeaturedItemWithImage[] = [
  {
    image: '/images/display-item-icon.png',
    title: '해외 마케팅',
  },
  {
    image: '/images/picture-item-icon.png',
    title: '퍼블리셔',
  },
  {
    image: '/images/box-item-icon.png',
    title: '캐드원(제도사)',
  },
  {
    image: '/images/star-item-icon.png',
    title: '해외 세일즈',
  },
  {
    image: '/images/telephone-item-icon.png',
    title: '해외 C',
  },
];

export const featuredItemCheckList: FeaturedItemCheck[] = [
  {
    title: '한국어 능력',
  },
  {
    title: '업무 수행 능력',
  },
  {
    title: '겸업 여부',
  },
  {
    title: '평판 조회',
  },
];
