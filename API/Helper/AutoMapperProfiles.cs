// using API.DTOs;
// using API.Entity;
// using AutoMapper;

// namespace API.Helper
// {
//     public class AutoMapperProfiles : Profile
//     {
//         private int groupEntity;

//         public AutoMapperProfiles()
//          {
//         //     CreateMap<groupEntity, groupDTO>()
//         //     .ForMember(dest => dest.groupName, opt => opt.MapFrom(s => s.Items));
// // ;           CreateMap<Article, ArticleBasicDto>().ForMember(dest => dest.Category, opt => opt.MapFrom(x => x.Category)).ForMember(dest => dest.User,

//                 // .ForMember(dest=>dest.groupName
//                 // ,opt=>opt.MapFrom(x => x.groupName)
//                 // );
//             // CreateMap<ItemsEntity, ItemDTO>();
//             // ClientViewModel cvm = Mapper.Map<ItemsEntity, ClientViewModel>(client);
            
// CreateMap<groupDTO , ItemsEntity>();
//     // .ForMember(d => d.Group.groupName, o => o.MapFrom(i => new groupEntity { groupName = i.groupName }));


//         }
//     }
// }