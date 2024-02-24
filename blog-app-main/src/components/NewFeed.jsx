import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { loadAllPosts } from '../services/post-service'
import { Row, Col, Pagination, PaginationItem, PaginationLink, Container } from 'reactstrap'
import Post from './Post'
import { toast } from 'react-toastify'
import InfiniteScroll from 'react-infinite-scroll-component'
import { deletePostService } from '../services/post-service'
function NewFeed() {
    const [postContent, setPostContent] = useState({
      content: [],
      totalPages: '',
      totalElements: '',
      pageSize: '',
      lastPage: false,
      pageNumber: '',
    });
  
    const [currentPage, setCurrentPage] = useState(0);
  
    useEffect(() => {
      console.log("loading Tutorials");
      console.log(currentPage);
      changePage(currentPage);
    }, [currentPage]);
  
    const changePage = (pageNumber = 0, pageSize = 3) => {
      if (pageNumber > postContent.pageNumber && postContent.lastPage) {
        return;
      }
      if (pageNumber < postContent.pageNumber && postContent.pageNumber === 0) {
        return;
      }
      loadAllPosts(pageNumber, pageSize)
        .then((data) => {
          setPostContent({
            content: pageNumber === 0 ? data.content : [...postContent.content, ...data.content],
            totalPages: data.totalPages,
            totalElements: data.totalElements,
            pageSize: data.pageSize,
            lastPage: data.lastPage,
            pageNumber: data.pageNumber,
          });
  
          console.log(data);
        })
        .catch((error) => {
          toast.error("Error in loading Tutorials");
        });
    };
  
    function deletePost(post) {
      // Going to delete post
      console.log(post);
  
      deletePostService(post.postId)
        .then((res) => {
          console.log(res);
          toast.success("Tutorial is deleted.");
  
          let newPostContents = postContent.content.filter((p) => p.postId !== post.postId);
          setPostContent({ ...postContent, content: newPostContents });
        })
        .catch((error) => {
          console.log(error);
          toast.error("Error in deleting Tutorial");
        });
    }
  
    const changePageInfinite = () => {
      console.log("page changed");
      setCurrentPage(currentPage + 1);
    };
  
    return (
      <div className="container-fluid">
        <Row>
          <Col md={{ size: 12 }}>
            <h1>Tutorial Count ({postContent?.totalElements})</h1>
  
            <Container className="mt-3">
              {/* Render your posts */}
              {postContent.content.map((post, index) => (
                <Post post={post} deletePost={deletePost} key={index} />
              ))}
  
              {/* Infinite Scroll */}
              <InfiniteScroll
                dataLength={postContent.content.length}
                next={changePageInfinite}
                hasMore={!postContent.lastPage}
                loader={<h4>Loading...</h4>}
                endMessage={<p>No more Tutorials</p>}
              />
            </Container>
  
            {/* Pagination */}
            <Pagination size="lg">
              {/* ... (previous button) */}
              {[...Array(postContent.totalPages)].map((item, index) => (
                <PaginationItem onClick={() => changePage(index)} active={index === postContent.pageNumber} key={index}>
                  <PaginationLink>{index + 1}</PaginationLink>
                </PaginationItem>
              ))}
              {/* ... (next button) */}
            </Pagination>
          </Col>
        </Row>
      </div>
    );
  }
  
  export default NewFeed;