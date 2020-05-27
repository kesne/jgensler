import { PostData, ItemType } from '../lib/types';

const post: PostData = {
    slug: 'test-one',
    content: [
        {
            type: ItemType.TITLE,
            content: 'Test #1 hoorah',
        },
        {
            type: ItemType.PARAGRAPH,
            content:
                'Shark bait hoo ha ha shark bait hoo ha ha shark bait hoo ha ha shark bait hoo ha ha shark bait hoo ha ha',
        },
    ],
};

export default post;
