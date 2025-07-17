// Book data types
export interface BookFormat {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
}

export interface BookDetails {
  isbn: string;
  publisher: string;
  publicationDate: string;
  pages: number;
  language: string;
  age: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  date: string;
  rating: number;
  title: string;
  content: string;
}

export interface RelatedBook {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  rating: number;
  reviewCount: number;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  rating: number;
  reviewCount: number;
  description: string;
  formats: BookFormat[];
  details: BookDetails;
  editorialReviews: string[];
  customerReviews: CustomerReview[];
  relatedBooks: RelatedBook[];
  authorMessage?: string;
}

// Book database
const books: Record<string, Book> = {
  "silver-feet-and-her-wonder": {
    id: "silver-feet-and-her-wonder",
    title: "Silver Feet and Her Wonder",
    author: "Nana Ndlovana-Mthimkhulu",
    coverImage: "/images/silver-feet-cover.png",
    rating: 4.8,
    reviewCount: 37,
    description: `"Silver Feet and her Wonder" is a captivating tale that transports readers into the enchanting world of the bird family, offering a unique perspective on the concept of birth and identity. Through the character of Silver Feet, the narrative delves into themes of individuality, acceptance, and self-discovery, presenting a thought-provoking exploration of what it means to be different in a society that values conformity.

As the story unfolds, readers are invited to embark on a journey of wonder and introspection, guided by the resilient spirit of Silver Feet and her extraordinary journey of self-realization amidst the challenges of her avian community.

With stunning illustrations that bring the vibrant pond ecosystem to life and lyrical prose that captivates young minds, this book is perfect for children ages 4-8 and makes an excellent bedtime story that parents will enjoy reading again and again.`,
    formats: [
      { id: "hardcover", name: "Hardcover", price: 18.99, originalPrice: 22.99 },
      { id: "paperback", name: "Paperback", price: 12.99 },
      { id: "ebook", name: "eBook", price: 9.99 },
    ],
    details: {
      isbn: "9781234567890",
      publisher: "Sunshine Children's Press",
      publicationDate: "03/15/2025",
      pages: 42,
      language: "English",
      age: "4-8 years",
    },
    editorialReviews: [
      `"Silver Feet and her Wonder" is a gracefully penned narrative that soars beyond the typical children's fable, offering a profound yet accessible exploration of individuality within a conformist society. Set in an enchantingly realized avian world, the story follows Silver Feet, a young bird whose unusual attributes set her apart from her peers. The author skillfully uses this premise not just to tell a tale of difference, but to delve into the very essence of birth, identity, and the often-challenging journey towards self-acceptance. The prose is gentle yet evocative, painting vivid pictures of Silver Feet's world and her internal struggles and triumphs.`,

      `The true strength of the book lies in its ability to convey complex emotional and philosophical concepts in a manner that is both engaging for young readers and thought-provoking for adults. Themes of resilience, the courage to embrace one's authentic self, and the beauty found in diversity are woven seamlessly into Silver Feet's journey. Her "wonder" becomes a metaphor for the unique gifts that often lie hidden within perceived imperfections, encouraging readers to look beyond superficial differences and celebrate the inherent value of every individual.`,

      `Ultimately, "Silver Feet and her Wonder" serves as a heartwarming testament to the power of self-discovery and the importance of an inclusive community. It's a story that will undoubtedly spark meaningful conversations and leave a lasting impression, reminding readers of all ages that our unique qualities are not obstacles, but rather the very essence of our strength and wonder. This captivating tale is a valuable addition to any collection, promising to inspire and uplift.`,
    ],
    customerReviews: [
      {
        id: "review1",
        author: "BookLover123",
        date: "April 15, 2025",
        rating: 5,
        title: "A Charming and Beautiful Story",
        content:
          "I picked this up on a whim, and I'm so glad I did! 'Silver Feet and her Wonder' is such a charming and beautifully written story. It's ostensibly a children's book, but the themes of self-acceptance and finding your unique place in the world resonate deeply, no matter your age. Silver Feet is an endearing protagonist, and her journey is both inspiring and heartwarming. A delightful read that leaves you feeling uplifted.",
      },
      {
        id: "review2",
        author: "ParentOfSeven",
        date: "April 10, 2025",
        rating: 5,
        title: "Sparked Wonderful Conversations",
        content:
          "My daughter and I read 'Silver Feet and her Wonder' together, and it sparked such wonderful conversations! She really connected with Silver Feet's struggle to fit in and then her triumph in embracing what made her special. It's a fantastic way to introduce concepts of diversity, individuality, and resilience in a gentle, age-appropriate manner. The message about being true to yourself is so important, and this book delivers it beautifully. Highly recommend for family reading time!",
      },
      {
        id: "review3",
        author: "YoungReader10",
        date: "April 8, 2025",
        rating: 4,
        title: "Silver Feet is Cool!",
        content:
          "Silver Feet is cool! At first, I felt a bit sad for her because the other birds didn't understand her silver feet. But then she discovered her 'wonder' and it was awesome! It made me think that being different isn't bad, it can actually be your superpower. The story was easy to read and I liked imagining the bird world. I wish there were pictures of her silver feet!",
      },
      {
        id: "review4",
        author: "LibrarianJane",
        date: "April 5, 2025",
        rating: 5,
        title: "A Delightful Addition to Children's Literature",
        content:
          "A truly delightful addition to contemporary children's literature. 'Silver Feet and her Wonder' navigates complex themes of identity and belonging with grace and sensitivity. The narrative voice is engaging, and Silver Feet is a protagonist young readers will undoubtedly root for. It's a story that not only entertains but also empowers, encouraging children to celebrate their uniqueness. This book has the feel of a modern classic and would be a wonderful resource for classroom discussions on empathy and self-esteem.",
      },
      {
        id: "review5",
        author: "ParentOfFive",
        date: "April 2, 2025",
        rating: 4,
        title: "A Sweet Story About Being Special",
        content:
          "We loved the idea of Silver Feet! My little one was fascinated by a bird with different feet. While some of the deeper themes might be for slightly older kids, the core message of being special even if you're different came through. It's a sweet story that champions kindness and seeing the good in what makes us unique. A lovely bedtime read.",
      },
    ],
    relatedBooks: [
      {
        id: "the-garden-whispers",
        title: "The Garden Whispers",
        author: "Nana Ndlovana-Mthimkhulu",
        coverImage: "/images/shield-of-sparrows-cover.webp",
        rating: 4.7,
        reviewCount: 28,
      },
      {
        id: "remarkably-bright-creatures",
        title: "Remarkably Bright Creatures",
        author: "Shelby Van Pelt",
        coverImage: "/images/remarkably-bright-creatures-cover.webp",
        rating: 4.6,
        reviewCount: 35,
      },
      {
        id: "fearless",
        title: "Fearless",
        author: "Lauren Roberts",
        coverImage: "/images/fearless-cover.webp",
        rating: 4.9,
        reviewCount: 41,
      },
      {
        id: "great-big-beautiful-life",
        title: "Great Big Beautiful Life",
        author: "Emily Henry",
        coverImage: "/images/great-big-beautiful-life-cover.webp",
        rating: 4.5,
        reviewCount: 33,
      },
      {
        id: "the-tenant",
        title: "The Tenant",
        author: "Freida McFadden",
        coverImage: "/images/the-tenant-cover.webp",
        rating: 4.8,
        reviewCount: 39,
      },
      {
        id: "james",
        title: "James",
        author: "Percival Everett",
        coverImage: "/images/james-cover.webp",
        rating: 4.7,
        reviewCount: 27,
      },
    ],
    authorMessage: `In "Silver Feet and her Wonder," the author presents a compelling narrative that challenges conventional notions of birth and belonging within the bird family. Through the character of Silver Feet, readers are encouraged to reflect on the power of individuality and the beauty of embracing one's uniqueness in a world that often seeks to homogenize differences. 

By weaving together themes of identity, acceptance, and resilience, the author invites readers to ponder the complexities of self-discovery and the transformative journey towards embracing one's true essence. "Silver Feet and her Wonder" stands as a testament to the beauty of diversity and the strength found in embracing one's authentic self, even in the face of adversity.`,
  },
  "the-monkey-blanket": {
    id: "the-monkey-blanket",
    title: "The Monkey Blanket",
    author: "Nana Ndlovana-Mthimkhulu",
    coverImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Silver%20Feet%20and%20Her%20Wonder%20by%20Nana%20Ndlovana-Mthimkhulu.%20Create%20a%20childrens%20book%20cover-4-S6y67Umej9HayzZVSVJfmdxDMOyKLK.png",
    rating: 4.9,
    reviewCount: 45,
    description: `"The Monkey Blanket" is a poignant narrative that weaves together elements of truth and storytelling, drawing readers into a tale passed down through generations. Inspired by a true story that the author's father shared, the narrative unfolds with a blend of authenticity and imaginative embellishment, creating a captivating story that resonates with readers.

Through the lens of this heartfelt tale, readers are transported into a world where reality and fiction intertwine to create a compelling narrative that evokes nostalgia, humor, and emotion.

The story follows Lily, a young girl afraid of a monster she believes lives in her closet. Her mother gives her a special monkey blanket, telling her it's very brave. That night, when Lily hears a noise, the monkeys on the blanket come alive, not to fight, but to investigate and ultimately befriend the shy, misunderstood "monster" in the closet, showing Lily there's nothing to fear.`,
    formats: [
      { id: "hardcover", name: "Hardcover", price: 17.99, originalPrice: 21.99 },
      { id: "paperback", name: "Paperback", price: 11.99 },
      { id: "ebook", name: "eBook", price: 8.99 },
    ],
    details: {
      isbn: "9781234567891",
      publisher: "Sunshine Children's Press",
      publicationDate: "05/10/2025",
      pages: 36,
      language: "English",
      age: "4-8 years",
    },
    editorialReviews: [
      `"The Monkey Blanket" is a masterful blend of family lore and creative storytelling that captures the imagination of young readers while delivering a powerful message about courage and understanding. Ndlovana-Mthimkhulu's narrative voice is both authentic and enchanting, drawing children into a world where blankets can be magical and fears can be overcome through friendship and empathy. The story's pacing is perfect for bedtime reading, with just enough excitement to engage without overstimulating.`,

      `What sets this book apart is its nuanced approach to childhood fears. Rather than simply vanquishing the "monster," the story takes the more thoughtful path of fostering understanding and connection. This subtle lesson in empathy is delivered with such a light touch that young readers absorb it naturally, without feeling preached to. The relationship between Lily and her mother is portrayed with warmth and wisdom, offering a positive model of supportive parenting that readers of all ages will appreciate.`,

      `The illustrations perfectly complement the text, bringing the magical monkey blanket to life with vibrant colors and expressive characters. Each page is a visual treat that children will want to explore again and again, discovering new details with each reading. "The Monkey Blanket" is destined to become a cherished bedtime favorite, one that parents will enjoy reading as much as children enjoy hearing. It's a wonderful addition to any child's library and a testament to the enduring power of family stories.`,
    ],
    customerReviews: [
      {
        id: "review1",
        author: "BookishMom",
        date: "May 15, 2025",
        rating: 5,
        title: "A New Bedtime Favorite!",
        content:
          "My daughter asks for this book every night! The story about the brave monkey blanket has helped her overcome her own bedtime fears. The illustrations are gorgeous and the message about befriending what we fear is so important for kids. Highly recommend!",
      },
      {
        id: "review2",
        author: "KindergartenTeacher",
        date: "May 12, 2025",
        rating: 5,
        title: "Perfect for the Classroom",
        content:
          "I read this to my kindergarten class and it sparked wonderful discussions about fears and bravery. The children were completely engaged with the story and loved the idea of a magical blanket. The illustrations are captivating and the message is perfect for this age group. A must-have for any classroom library!",
      },
      {
        id: "review3",
        author: "DadOfThree",
        date: "May 18, 2025",
        rating: 5,
        title: "Beautifully Written and Illustrated",
        content:
          "This book has become a staple in our bedtime routine. The story is engaging and the message is powerful without being heavy-handed. My kids love pointing out all the details in the illustrations, especially the expressions on the monkeys' faces. The author has a wonderful way of addressing childhood fears in a reassuring way.",
      },
      {
        id: "review4",
        author: "ChildPsychologist",
        date: "May 20, 2025",
        rating: 5,
        title: "Excellent for Addressing Childhood Fears",
        content:
          "As a child psychologist, I often recommend books that help children process their fears. 'The Monkey Blanket' does this beautifully, showing how understanding can replace fear. The story validates children's feelings while offering a positive way to reframe scary situations. I've already recommended it to many families in my practice.",
      },
      {
        id: "review5",
        author: "GrandmaJoy",
        date: "May 16, 2025",
        rating: 4,
        title: "A Delightful Story with a Great Message",
        content:
          "I bought this for my grandchildren and they absolutely love it. The story is charming and the illustrations are beautiful. I appreciate how it teaches children to face their fears in a gentle, non-threatening way. The only reason I'm giving it 4 stars instead of 5 is that I wish it was a bit longer - the kids always want more!",
      },
    ],
    relatedBooks: [
      {
        id: "silver-feet-and-her-wonder",
        title: "Silver Feet and Her Wonder",
        author: "Nana Ndlovana-Mthimkhulu",
        coverImage: "/images/silver-feet-cover.png",
        rating: 4.8,
        reviewCount: 37,
      },
      {
        id: "the-garden-whispers",
        title: "The Garden Whispers",
        author: "Nana Ndlovana-Mthimkhulu",
        coverImage: "/images/shield-of-sparrows-cover.webp",
        rating: 4.7,
        reviewCount: 28,
      },
      {
        id: "remarkably-bright-creatures",
        title: "Remarkably Bright Creatures",
        author: "Shelby Van Pelt",
        coverImage: "/images/remarkably-bright-creatures-cover.webp",
        rating: 4.6,
        reviewCount: 35,
      },
      {
        id: "fearless",
        title: "Fearless",
        author: "Lauren Roberts",
        coverImage: "/images/fearless-cover.webp",
        rating: 4.9,
        reviewCount: 41,
      },
      {
        id: "great-big-beautiful-life",
        title: "Great Big Beautiful Life",
        author: "Emily Henry",
        coverImage: "/images/great-big-beautiful-life-cover.webp",
        rating: 4.5,
        reviewCount: 33,
      },
      {
        id: "the-tenant",
        title: "The Tenant",
        author: "Freida McFadden",
        coverImage: "/images/the-tenant-cover.webp",
        rating: 4.8,
        reviewCount: 39,
      },
    ],
    authorMessage: `In "The Monkey Blanket," I present a true story relayed by my father, infused with a touch of creative license that adds depth and dimension to the narrative. While I did not personally experience the events described in the story, the tale serves as a heartfelt homage to family lore and the storytelling tradition.

By sharing this narrative with readers, I invite them to appreciate the power of storytelling in preserving memories, passing down wisdom, and connecting generations through shared experiences and imaginative retellings.`,
  },
};

// Helper function to get book by ID
export function getBookById(id: string): Book | null {
  return books[id] || null;
}

// Helper function to get all books
export function getAllBooks(): Book[] {
  return Object.values(books);
}

// Helper function to get book IDs
export function getBookIds(): string[] {
  return Object.keys(books);
} 