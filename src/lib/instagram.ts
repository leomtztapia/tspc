// Instagram Basic Display API
const INSTAGRAM_ACCESS_TOKEN = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;
const INSTAGRAM_USER_ID = process.env.NEXT_PUBLIC_INSTAGRAM_USER_ID;

export interface InstagramPost {
  id: string;
  caption: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
  like_count?: number;
  comments_count?: number;
}

export async function getInstagramPosts(): Promise<InstagramPost[]> {
  if (!INSTAGRAM_ACCESS_TOKEN || !INSTAGRAM_USER_ID) {
    console.warn('Instagram API credentials not configured');
    return getSamplePosts();
  }

  try {
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${INSTAGRAM_ACCESS_TOKEN}&limit=6`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch Instagram posts');
    }

    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    return getSamplePosts();
  }
}

// Posts de muestra para cuando no hay API configurada
function getSamplePosts(): InstagramPost[] {
  return [
    {
      id: '1',
      caption: 'Pizza artesanal recién salida del horno 🍕 #pizza #artesanal',
      media_type: 'IMAGE',
      media_url: '/assets/tspc_slideshow1-1.jpg',
      permalink: 'https://www.instagram.com/p/sample1/',
      timestamp: new Date().toISOString(),
      like_count: 245,
      comments_count: 12
    },
    {
      id: '2',
      caption: 'Los mejores ingredientes frescos para tu pizza #ingredientes #fresco',
      media_type: 'IMAGE',
      media_url: '/assets/tspc_slideshow1-2.jpg',
      permalink: 'https://www.instagram.com/p/sample2/',
      timestamp: new Date().toISOString(),
      like_count: 189,
      comments_count: 8
    },
    {
      id: '3',
      caption: 'Behind the scenes: preparando la masa #behindthescenes #masa',
      media_type: 'IMAGE',
      media_url: '/assets/tspc_slideshow1-3.jpg',
      permalink: 'https://www.instagram.com/p/sample3/',
      timestamp: new Date().toISOString(),
      like_count: 312,
      comments_count: 15
    },
    {
      id: '4',
      caption: 'El toque final que hace la diferencia #detalles #pizza',
      media_type: 'IMAGE',
      media_url: '/assets/tspc_slideshow1-4.jpg',
      permalink: 'https://www.instagram.com/p/sample4/',
      timestamp: new Date().toISOString(),
      like_count: 278,
      comments_count: 11
    },
    {
      id: '5',
      caption: 'Nuestras pizzas favoritas del día #favoritas #delicioso',
      media_type: 'IMAGE',
      media_url: '/assets/tspc_slideshow1-5.jpg',
      permalink: 'https://www.instagram.com/p/sample5/',
      timestamp: new Date().toISOString(),
      like_count: 203,
      comments_count: 9
    },
    {
      id: '6',
      caption: 'Cada pizza es una obra de arte 🎨 #arte #pizza',
      media_type: 'IMAGE',
      media_url: '/assets/tspc_slideshow1-6.jpg',
      permalink: 'https://www.instagram.com/p/sample6/',
      timestamp: new Date().toISOString(),
      like_count: 156,
      comments_count: 7
    }
  ];
} 