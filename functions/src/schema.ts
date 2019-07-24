import { buildSchema } from 'graphql';


const schema = buildSchema(`
    scalar Object,
    type Query {
        course(id: Int!): Course
        courses(topic: String): [Course]
        videos(videoId: String): [Video]
    },
    type Course {
        id: Int
        title: String
        author: String
        description: String
        topic: String
        url: String
    },
    type Video {
        id: String!
        videoId: String
        kind: String,
        etag: String,
        publishedAt: String,
        channelId: String,
        title: String,
        description: String,
        thumbnails: Object,
        channelTitle: String,
        playlistId: String,
        position: String,
    }

`);

export default schema;