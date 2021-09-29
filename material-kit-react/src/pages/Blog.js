/* eslint-disable */
import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../components/_dashboard/blog';
//
import POSTS from '../_mocks_/blog';
import faker from 'faker';
// utils
import { mockImgCover } from '../utils/mockImages';
//import posts from '../_mocks_/blog';

// ----------------------------------------------------------------------
const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' }
];
// ----------------------------------------------------------------------

export default function Blog() {
  console.log('Umfragen');
  const [posts, setPosts] = useState([]);
  const [video, setVideo] = useState([]);
  const [result, setResult] = useState([]);
  useEffect(async () => {
    getAllVideos();
  }, []);

  function getAllVideos() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UTkJRamhFUmpZd05VRXlRakpFUkRGRk5rSXpPRGc0T0RZMlFqWTNSamd3TURoRVFUVTROZyJ9.eyJodHRwczovL3ZpZGVvYXNrLmNvbS9sb2dpbnNfY291bnQiOjMsImlzcyI6Imh0dHBzOi8vYXV0aC52aWRlb2Fzay5jb20vIiwic3ViIjoib2F1dGgyfHR5cGVmb3JtfDAxRkJLU1dDVEszRFBIRUFHWUcyWUNIQk0yIiwiYXVkIjpbImh0dHBzOi8vYXBpLnZpZGVvYXNrLmNvbS8iLCJodHRwczovL3ZpZGVvYXNrLmV1LmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2MzI4NTI4NjMsImV4cCI6MTYzMjg1Mzc2MywiYXpwIjoicDNNbTM4alJpZGVoU01NT0E5N2xUdkoyN1BDbm5HSmgiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIn0.mMsya_KXS-6RBJuKFl4lrrsjTO9Up9NuqoSYXjj3as8-CI7QzJ3lgjdXMLLxa6cbmQPb1nggTqw3Ti4ioYzyz7pYoeUU9kjN7CEqV-PmP4oK6tJa0GUbh2GHxcWWd2fTBd6CxyniSTo6qXIqAmYfr_xJDTosStMntow8BVg8XXNfkDdo2pxjtu-g_6yQAZsvKb3PGj7gfRsdSKWMFUhKW6zfx5m6r-LjhJuLJ3zSON_LZ_Vz-qaMrELZjciEfmr4aGfpI3yYgQuPZNmaoIigto0s_25O16VI2mPc_Z9drHljIx743pPEyZpjr6mjiLTvU8E2AUYiRxYnZoOzTy9RZA");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    Promise.all([
      //fetch("https://api.videoask.com/forms?limit=0&offset=0&title=", requestOptions),
      // fetch("https://api.videoask.com/questions/33e23e3c-8e7b-4d16-b414-e016409f6849/answers?limit=20&offset=0", requestOptions)
    ]).then(function (responses) {
      // Get a JSON object from each of the responses
      return Promise.all(responses.map(function (response) {
        return response.json();
      }));
    }).then(function (data) {
      // Log the data to the console
      // You would do something with both sets of data here
      var resVideo = JSON.parse('{"next":null,"previous":null,"results":[{"are_answers_public":false,"are_messages_public":false,"author_id":"13282091-c437-4b79-a419-91b963e9eaa5","created_at":"2021-09-27T12:52:30.870530Z","first_question":{"allow_multiple_selection":false,"answers_count":0,"collect_contact_information":false,"created_at":"2021-09-27T12:53:12.896920Z","form_id":"99a31145-c5f6-4573-b5bc-bf444bd124c4","label":"1 Wo wurde der Wolf gesehen?...","logic_actions":[{"action":"jump","details":{"to":{"type":"goodbye","value":"default"}},"condition":{"op":"always","vars":[]}}],"media_id":"e26a2c56-95c8-403d-8239-dbb204e55336","media_type":"video","media_url":"https://player.vimeo.com/external/552722110.hd.mp4?s=45c5a54…372ff31bef936b112f24&profile_id=174&oauth2_token_id=57447761","metadata":{"text":"Wo wurde der Wolf gesehen?","darken_text_background":true,"fit_video":false,"overlay_text_size":5},"poll_options":[{"id":"f9b5aeb6-d734-44ec-a07b-90f2f7207d2a","option_id":"f9b5aeb6-d734-44ec-a07b-90f2f7207d2a","content":"Graubünden","total_count":0,"ref":"64cf2932-51d8-4990-81f2-84170219e08b"},{"id":"a4218426-4b70-406c-a61c-6e3e800aeaae","option_id":"a4218426-4b70-406c-a61c-6e3e800aeaae","content":"St. Gallen","total_count":0,"ref":"5b9b7409-c0a7-4f61-9075-e0369e4e9a08"},{"id":"7b54aa23-cb28-4f4c-bb75-e4205a2694b8","option_id":"7b54aa23-cb28-4f4c-bb75-e4205a2694b8","content":"Thurgau","total_count":0,"ref":"878d743e-f546-46d4-aed8-f3cb68cd4216"}],"question_id":"33e23e3c-8e7b-4d16-b414-e016409f6849","share_id":"festx87kz","share_url":"https://www.videoask.com/festx87kz","thumbnail":"https://images.pexels.com/videos/7964625/animal-animal-park-…7964625.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200","title":"Wo wurde der Wolf gesehen?","transcode_status":"completed","transcribe_status":"completed","type":"poll","updated_at":"2021-09-27T12:53:58.139339Z"},"form_id":"99a31145-c5f6-4573-b5bc-bf444bd124c4","hide_branding":false,"idle_deadline_time_in_minutes":60,"metadata":{"primary_color":"#7D00FE","secondary_color":"#36CF71","background_color":"#ffffff","font_family":"Apercu Pro","font_value":"Apercu Pro","locale":"de-DE","show_form_title":false,"live_recording":true,"show_overlay_close_button":true,"show_player_controls":true,"square_button_radius":16},"notifications":{"send_contact_message_emails":true},"organization_id":"0d9e9b7a-5471-43ef-90c5-86aa8adf81e1","requires_consent":false,"requires_contact_email":false,"requires_contact_info":false,"requires_contact_name":false,"requires_contact_phone_number":false,"requires_contact_product_name":false,"respondents_count":0,"responses_share_id":"rg3t70amrbv1lcd1ydtpakz5f29llsxgn7q0s079","responses_share_url":"https://www.videoask.com/rg3t70amrbv1lcd1ydtpakz5f29llsxgn7q0s079","share_id":"festx87kz","share_url":"https://www.videoask.com/festx87kz","show_consent":false,"show_contact_email":false,"show_contact_name":false,"show_contact_phone_number":false,"show_contact_product_name":false,"tag_share_id":"zaa3ouhfa84twflb2qs269bhnho4pm5z6i3iyzkf","tag_share_url":"https://www.videoask.com/zaa3ouhfa84twflb2qs269bhnho4pm5z6i3iyzkf","title":"Wie geht es dem Wolf?","updated_at":"2021-09-27T12:53:58.143191Z"},{"are_answers_public":false,"are_messages_public":false,"author_id":"13282091-c437-4b79-a419-91b963e9eaa5","created_at":"2021-09-27T08:38:22.318808Z","first_question":{"allow_multiple_selection":false,"answers_count":0,"collect_contact_information":true,"created_at":"2021-09-27T08:39:40.915862Z","form_id":"f7d917e6-039a-4a44-b5aa-324f9e7cabf4","label":"1 Test","logic_actions":[{"action":"jump","details":{"to":{"type":"goodbye","value":"default"}},"condition":{"op":"always","vars":[]}}],"media_id":"38fa68b5-e99a-4953-9361-63f11ffe1e68","media_type":"video","media_url":"https://media2.giphy.com/media/xT0GqHQxfxp6GcwKbu/giphy.mp4?…2jbe3wydj8qh560mdsb8rp4ky61yjpvcw85ig1zpg&rid=giphy.mp4&ct=g","metadata":{"text":"Test","darken_text_background":false,"fit_video":true,"overlay_text_size":7},"poll_options":[{"id":"1a438cce-b56c-4b00-97d0-f7bc6533ec77","option_id":"1a438cce-b56c-4b00-97d0-f7bc6533ec77","content":"0-20","total_count":0,"ref":"7e3f5fb5-3402-4d33-83c5-629828daf12c"},{"id":"69d9597d-6d35-4351-be13-a3ce71716bb7","option_id":"69d9597d-6d35-4351-be13-a3ce71716bb7","content":"20-40","total_count":0,"ref":"e8f43b8f-f800-4bd3-bdb6-6db273c4ac25"},{"id":"0920cdcc-7dfc-46bf-8e42-33c5b91b7617","option_id":"0920cdcc-7dfc-46bf-8e42-33c5b91b7617","content":"40-99","total_count":0,"ref":"63e09132-592c-4fb0-ac36-b38013285399"}],"question_id":"0e879101-7e2f-49e9-a1cc-44a0cb2792af","share_id":"fsdxdm2ou","share_url":"https://www.videoask.com/fsdxdm2ou","thumbnail":"https://media2.giphy.com/media/xT0GqHQxfxp6GcwKbu/giphy-prev…j8qh560mdsb8rp4ky61yjpvcw85ig1zpg&rid=giphy-preview.gif&ct=g","title":"Wie alt bist du?","transcode_status":"completed","transcribe_status":"completed","type":"poll","updated_at":"2021-09-27T08:40:20.851680Z"},"form_id":"f7d917e6-039a-4a44-b5aa-324f9e7cabf4","hide_branding":false,"idle_deadline_time_in_minutes":60,"metadata":{"primary_color":"#7D00FE","secondary_color":"#36CF71","background_color":"#ffffff","font_family":"Apercu Pro","font_value":"Apercu Pro","locale":"en-US","show_form_title":false,"live_recording":true,"show_overlay_close_button":true,"show_player_controls":true,"square_button_radius":16},"notifications":{"send_contact_message_emails":true},"organization_id":"0d9e9b7a-5471-43ef-90c5-86aa8adf81e1","requires_consent":false,"requires_contact_email":true,"requires_contact_info":true,"requires_contact_name":true,"requires_contact_phone_number":false,"requires_contact_product_name":false,"respondents_count":0,"responses_share_id":"rqcswwrkfg2oeo5f5f5ls2v98rapb8wqfj8dooxh","responses_share_url":"https://www.videoask.com/rqcswwrkfg2oeo5f5f5ls2v98rapb8wqfj8dooxh","share_id":"fsdxdm2ou","share_url":"https://www.videoask.com/fsdxdm2ou","show_consent":false,"show_contact_email":true,"show_contact_name":true,"show_contact_phone_number":false,"show_contact_product_name":false,"tag_share_id":"z4k6oyby6du3hwuebourhkkdi09gl58xtqk4uwcc","tag_share_url":"https://www.videoask.com/z4k6oyby6du3hwuebourhkkdi09gl58xtqk4uwcc","title":"Test","updated_at":"2021-09-27T12:05:01.501020Z","variables":[{"key":"contact_email","type":"string"}]}],"count":2}');
      console.log(resVideo);
      var resResponse = JSON.parse('{"next":null,"previous":null,"results":[{"answer_id":"3c88d588-6769-4a8e-af2e-fa2c0e46f12d","organization_id":"0d9e9b7a-5471-43ef-90c5-86aa8adf81e1","contact_id":"9368a046-5c49-4f2b-a8af-125139728461","created_at":"2021-09-28T07:23:36.554742Z","form_author_id":"13282091-c437-4b79-a419-91b963e9eaa5","form_hide_branding":false,"form_id":"99a31145-c5f6-4573-b5bc-bf444bd124c4","form_metadata":{"locale":"de-DE","font_value":"Apercu Pro","font_family":"Apercu Pro","primary_color":"#7D00FE","live_recording":true,"secondary_color":"#36CF71","show_form_title":false,"background_color":"#ffffff","show_player_controls":true,"square_button_radius":16,"show_overlay_close_button":true},"form_share_id":"festx87kz","is_public":false,"media_type":"poll","poll_options":[{"id":"f9b5aeb6-d734-44ec-a07b-90f2f7207d2a","content":"Graubünden","ref":"64cf2932-51d8-4990-81f2-84170219e08b"}],"file_uploads":[],"question_id":"33e23e3c-8e7b-4d16-b414-e016409f6849","share_id":"alt8pldndcmdzqxo51sq2kjo5cmy0i4datcnio1z","share_url":"https://www.videoask.com/alt8pldndcmdzqxo51sq2kjo5cmy0i4datcnio1z","transcode_status":"completed","transcription":"","type":"poll","poll_option_id":"f9b5aeb6-d734-44ec-a07b-90f2f7207d2a","poll_option_content":"Graubünden"}]}');
      console.log(resResponse);
      extractVideoId(resVideo, resResponse);
    }).catch(function (error) {
      // if there's an error, log it
      console.log(error);
    });

    // fetch("https://api.videoask.com/forms?limit=0&offset=0&title=", requestOptions)
    //   .then(response => response.text())
    //   .then(result => {
    //     // console.log(result);
    //     extractVideoId(result);
    //   })
    //   .catch(error => console.log('error', error));
    // extractResponseMetrics(result)
    // fetch("https://api.videoask.com/questions/33e23e3c-8e7b-4d16-b414-e016409f6849/answers?limit=20&offset=0", requestOptions)
    //   .then(response => response.text())
    //   .then(result => extractResponseMetrics(result))
    //   .catch(error => console.log('error', error));
  }

  function extractResponseMetrics(apiResult) {
    var jsonAPI = JSON.parse('{"next":null,"previous":null,"results":[{"answer_id":"3c88d588-6769-4a8e-af2e-fa2c0e46f12d","organization_id":"0d9e9b7a-5471-43ef-90c5-86aa8adf81e1","contact_id":"9368a046-5c49-4f2b-a8af-125139728461","created_at":"2021-09-28T07:23:36.554742Z","form_author_id":"13282091-c437-4b79-a419-91b963e9eaa5","form_hide_branding":false,"form_id":"99a31145-c5f6-4573-b5bc-bf444bd124c4","form_metadata":{"locale":"de-DE","font_value":"Apercu Pro","font_family":"Apercu Pro","primary_color":"#7D00FE","live_recording":true,"secondary_color":"#36CF71","show_form_title":false,"background_color":"#ffffff","show_player_controls":true,"square_button_radius":16,"show_overlay_close_button":true},"form_share_id":"festx87kz","is_public":false,"media_type":"poll","poll_options":[{"id":"f9b5aeb6-d734-44ec-a07b-90f2f7207d2a","content":"Graubünden","ref":"64cf2932-51d8-4990-81f2-84170219e08b"}],"file_uploads":[],"question_id":"33e23e3c-8e7b-4d16-b414-e016409f6849","share_id":"alt8pldndcmdzqxo51sq2kjo5cmy0i4datcnio1z","share_url":"https://www.videoask.com/alt8pldndcmdzqxo51sq2kjo5cmy0i4datcnio1z","transcode_status":"completed","transcription":"","type":"poll","poll_option_id":"f9b5aeb6-d734-44ec-a07b-90f2f7207d2a","poll_option_content":"Graubünden"}]}');
    const videoAskResult = [jsonAPI.results.length];
    jsonAPI.results.forEach(function (value, i) {

      videoAskResult[i] = {
        id: value.form_id,
        view: jsonAPI.results.length,
        question_id: value.question_id,
        share: 12,
        favorite: 12,
      }
    });
    setResult(videoAskResult);
  }

  function extractVideoId(resVideo, resResponse) {
    // console.log(apiResult);
    var videoArray = resVideo.results;
    const videoAsk = [videoArray.length];
    const userData = JSON.parse(localStorage.getItem('userData'));
    videoArray.forEach(function (value, i) {
      resResponse.results.forEach(element => {
        if (value.form_id === element.form_id) {
          videoAsk[i] = {
            id: value.form_id,
            cover: value.first_question.thumbnail,
            title: value.title,
            createdAt: value.created_at,
            url: value.share_url + '#contact_email=' + userData.id,
            question_id: value.question_id,
            view: resResponse.results.length,
            share: 0,
            favorite: 0,
            author: {
              name: value.author_id,
              avatarUrl: `/static/mock-images/avatars/avatar_default.jpg`
            }
          }
        } else {
          videoAsk[i] = {
            id: value.form_id,
            cover: value.first_question.thumbnail,
            title: value.title,
            createdAt: value.created_at,
            url: value.share_url + '#contact_email=' + userData.id,
            question_id: value.question_id,
            view: 0,
            share: 0,
            favorite: 0,
            author: {
              name: value.author_id,
              avatarUrl: `/static/mock-images/avatars/avatar_default.jpg`
            }
          }
        }
      });
    });
    setVideo(videoAsk);
  }

  return (
    <Page title="Umfragen | Unear">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Umfragen
          </Typography>
          {/* <Button
            variant="contained"
            component={RouterLink}
            to="#"
            startIcon={<Icon icon={plusFill} />}
          >
            New Post
          </Button> */}
        </Stack>

        {/* <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <BlogPostsSearch posts={POSTS} />
          <BlogPostsSort options={SORT_OPTIONS} />
        </Stack> */}

        <Grid container spacing={3}>
          {video.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
