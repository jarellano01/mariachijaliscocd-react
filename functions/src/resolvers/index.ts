import { getPlaylistVideos } from '../functions/youtube'
import Object from './Object'

const resolverFunctions = {
    course: (args: any) => {
        console.log(args)
        return ({ id: args.id, title: 'class' });
    },
    courses: () => ([{ id: '1', title: 'class' }]),
    videos: (args: {playlistId: string}) => getPlaylistVideos(args.playlistId),
    Object: Object
}

export default resolverFunctions
