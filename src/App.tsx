import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { Container, Box, Typography, List, ListItem, Link, Button, Grid, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Noto Sans KR', sans-serif;
    overflow: auto; /* 스크롤 가능 */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

  body::-webkit-scrollbar {
    display: none;  /* Chrome, Safari, and Opera */
  }
`;

declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      round: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    custom?: {
      round?: string;
    };
  }
}

const theme = createTheme({
  typography: {
    fontFamily: 'Noto Sans KR, Arial, sans-serif',
  },
  palette: {
    primary: {
      main: '#1E88E5', // 파란색
    },
    secondary: {
      main: '#D32F2F', // 빨간색
    },
    background: {
      default: 'white', // 밝은 회색
    },
    text: {
      primary: '#333', // 어두운 회색
      secondary: '#757575', // 중간 회색
    },
  },
  custom: {
    round: '#B0E7FA', // 커스텀 색상
  }
});

const CustomAccordion = styled(Accordion)`
  box-shadow: none;
  border: none;
  &:before {
    display: none;
  }
`;

const CustomAccordionSummary = styled(AccordionSummary)`
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
`;

const CustomAccordionDetails = styled(AccordionDetails)`
  border-top: none;
  padding: 0;
`;

const NumberedList = styled(List)`
  counter-reset: list;
  font-weight: 800;
`;

const NumberedListItem = styled(ListItem)`
  counter-increment: list;
  list-style: none;
  position: relative;
  margin-left: 20px;

  &::before {
    content: counter(list) ". ";
    position: absolute;
    left: -20px;
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

const CustomBox = styled(Box)`
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 4px;
  padding: 16px;
  background-color: #F5F5F5;
`;

const CustomBox2 = styled(Box)`
  border: none ;
  padding: 8px 16px;
  background-color: tomato;
  color : white;
  font-size: 14px;
`;

const ResponsiveImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  margin: auto;

  @media (min-width: 501px) {
    max-width: 70%;
    height: auto;
    display: block;
    margin: auto;
  }
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 90vh;
`;

const FooterContainer = styled.footer`
  width: 100%;
  text-align: center;
  padding: 35px 0 0 0;
  font-size: 12px;
`;

const EmphasizedText = styled.span`
  position: relative;
  padding-left: 0; /* 원과 텍스트 사이의 간격을 확보 */
  font-weight: bold;
  font-size : h3;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    left: -8px;
    top: 8px;
    transform: translateY(-50%);
    width: 20px; /* 원의 크기 */
    height: 20px;
    background-color: ${({ theme }) => theme.custom.round}; /* 원의 색상 */
    border-radius: 50%; /* 원 모양으로 만들기 */
    z-index: -1; /* 원이 텍스트 뒤로 가도록 설정 */
  }
`;

function App() {
  const [imageSrc, setImageSrc] = useState('/logic2.png');
  const [isSS1, setIsSS1] = useState("도시가스 배관보호 안내");
  const [isSS2, setIsSS2] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        setImageSrc('/eocs.png');
        setIsSS1("도시가스");
        setIsSS2("배관보호 안내");
      } else {
        setImageSrc('/eocs.png');
        setIsSS1("도시가스 배관보호 안내");
        setIsSS2("");
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [fontSizeChange, setFontSizeChange] = useState(0);

  const toggleFontSize = () => {
    setFontSizeChange((prevValue) => (prevValue === 0 ? 1 : 0));
  };

  const getVariant = () => (fontSizeChange === 0 ? 'body1' : 'h6');
  const getFontSize = () => (fontSizeChange === 0 ? '1.25rem' : '1.5rem')

  return (
    <MuiThemeProvider theme={theme}>
        <PageContainer>
        <StyledThemeProvider theme={theme}>
          <GlobalStyle />
          <Container>
            <Box
              component="header"
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="10vh"
              bgcolor="primary.main"
              color="white"
              mb={1}
              py={1}  /* 위와 아래 여백 추가 */
              boxShadow={5}
            >
              <Typography variant="h4" component="h1" align="center">
                {isSS1} <br /> {isSS2}
              </Typography>
            </Box>
            <Box component="main" mt={4} >
              <Box mb={4} >
                <Typography variant="h4" fontWeight="bold" align='center' gutterBottom color="primary.main">
                  굴착공사 신고 방법
                </Typography>
                <CustomBox boxShadow={5}>
                  <Typography variant="h5" color="text.primary">
                    <Grid container spacing={1} alignItems="center" style={{ marginBottom: '-19px' }}>
                      <Grid item xs={4} container justifyContent="flex-end">
                      </Grid>
                      <Grid item xs={8} style={{ display: 'inline-flex', alignItems: 'center'}}>
                        <Typography style={{ fontSize: '13px' }} gutterBottom color="primary.main">* 전국동일, 연중무휴</Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="center" style={{ marginBottom: '8px' }}>
                      <Grid item xs={4} container justifyContent="flex-end">
                        전화 :
                      </Grid>
                      <Grid item xs={8} style={{ display: 'inline-flex', alignItems: 'center' }}>
                        <Link href="tel:1644-0041" color="text.primary" underline="none">1644 - 0041</Link>
                      </Grid>
                    </Grid>

                    <Grid container spacing={1} alignItems="center" style={{ marginBottom: '8px' }}>
                      <Grid item xs={4} container justifyContent="flex-end">
                        App :
                      </Grid>
                      <Grid item xs={8} container spacing={1}>
                        <Grid item>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() => window.open('https://play.google.com/store/apps/details?id=com.eocs.mobile', '_blank')}
                          >
                            안드로이드
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() => window.open('https://apps.apple.com/kr/app/%EA%B5%B4%EC%B0%A9%EA%B3%B5%EC%82%AC%EC%A0%95%EB%B3%B4%EC%A7%80%EC%9B%90%EC%8B%9C%EC%8A%A4%ED%85%9C/id1189086746', '_blank')}
                          >
                            아이폰
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="center" style={{ marginBottom: '8px' }}>
                      <Grid item xs={4} container justifyContent="flex-end">
                        인터넷 :
                      </Grid>
                      <Grid item xs={8}>
                        <Link href="http://m.eocs.or.kr" color="text.primary" underline="none">www.eocs.or.kr</Link><br/>
                      </Grid>                    
                    </Grid>
                    <Grid container spacing={1} alignItems="center" style={{ marginBottom: '-21px', marginTop: '-19px'}}>
                      <Grid item xs={4} container justifyContent="flex-end">
                      </Grid>
                      <Grid item xs={8} style={{ display: 'inline-flex', alignItems: 'center'}}>
                        <Typography style={{ fontSize: '13px' }} gutterBottom color="primary.main">* JB 상황실</Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="center" style={{ marginBottom: '8px' }}>
                    <Grid item xs={4} container justifyContent="flex-end">
                      상황실 :
                    </Grid>
                    <Grid item xs={8} style={{ display: 'inline-flex', alignItems: 'center' }}>
                      <Link href="tel:041-530-1900" color="text.primary" underline="none">041-530-1900</Link>
                    </Grid>
                  </Grid>
                <CustomBox2>
                  미신고 굴착공사 시 도시가스 사업법에 따라 2년 이하의 징역 또는 2천만원 이하의 벌금이 부과될 수 있습니다.
                </CustomBox2>
                  </Typography>
                </CustomBox>                            
              </Box>
              <CustomAccordion>
                <CustomAccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6" color="primary.main">굴착공사 신청 및 이용절차</Typography>
                </CustomAccordionSummary>
                <CustomAccordionDetails>
                  <Box p={2} bgcolor="background.default" border="1px solid #757575" boxShadow={5}>
                    <Typography variant="body1" color="text.secondary">
                      <ResponsiveImage src={imageSrc} alt="logic" style={{marginBottom:"18px"}}/>
                    </Typography>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom:"18px" }}>
                    <Button variant="contained" color="primary" onClick={toggleFontSize }>
                      글자 크기 변경
                    </Button>
                  </div>
                    <Typography variant="body1" color="text.secondary">
                      <span className="highlighted-text"> </span>
                    </Typography>
                    <EmphasizedText>굴착공사 신고대상</EmphasizedText>
                        <Typography variant={getVariant()} color="text.secondary" style={{marginBottom:"18px"}}>
                        <span style={{ fontSize: getFontSize(), fontWeight: 'bold', color: 'red' }}>24시간</span> 내 도시가스 매설 지역에서 구멍뚫기, 말뚝박기,터파기 등의 굴착공사를 하는 자
                        </Typography>
                    <Typography variant="body1" color="text.secondary">
                      <span className="highlighted-text"> </span>
                    </Typography>
                    <EmphasizedText>위반시 벌칙</EmphasizedText>
                    <NumberedList>
                    <NumberedListItem>
                        <Typography variant={getVariant()} color="text.secondary" >
                        공사자가 공사 시행 전에 굴착공사정보 지원센터에 신고 미 준수 시
                        </Typography>
                    </NumberedListItem>
                    <CustomBox2 style={{marginBottom:"18px"}}>
                    <Typography variant={getVariant()} style={{fontWeight:"bold"}}>
                    2년 이하의 징역 또는 2000만원 이하의 벌금
                    </Typography>
                    </CustomBox2>
                    <NumberedListItem>
                        <Typography variant={getVariant()} color="text.secondary" >
                        굴착공사 정보지원센터로부터 굴착공사 개시통보를 받기 전 굴착공사 시 
                        </Typography>
                    </NumberedListItem>
                    </NumberedList>
                    <CustomBox2 style={{marginBottom:"18px"}}>
                    <Typography variant={getVariant()} style={{fontWeight:"bold"}}>
                    1년 이하의 징역 또는 1000만원 이하의 벌금
                    </Typography>
                    </CustomBox2>
                    <Typography variant="body1" color="text.secondary">
                      <span className="highlighted-text"> </span>
                    </Typography>
                    <EmphasizedText>협의서 작성 필수 공사</EmphasizedText>
                    <NumberedList>
                    <NumberedListItem>
                        <Typography variant={getVariant()} color="text.secondary" >
                        굴착공사 예정지역 범위 안에 매설 된 <span style={{ fontSize: getFontSize(), fontWeight: 'bold', color: 'red' }}>도시가스배관 길이</span>가 <span style={{ fontSize: getFontSize(), fontWeight: 'bold', color: 'red' }}>100m</span> 이상인 경우
                        </Typography>
                    </NumberedListItem>
                    <NumberedListItem>
                        <Typography variant={getVariant()} color="text.secondary" >
                        최고사용압력이 <span style={{ fontSize: getFontSize(), fontWeight: 'bold', color: 'red' }}>중압</span> 이상인 배관이 <span style={{ fontSize: getFontSize(), fontWeight: 'bold', color: 'red' }}>10m</span> 이상 노출될 것이 예상되는 굴착공사인 경우
                        </Typography>
                    </NumberedListItem>
                    </NumberedList>
                    <Typography variant="body1" color="text.secondary">
                      <span className="highlighted-text"> </span>
                    </Typography>
                    <EmphasizedText>신고 내용</EmphasizedText>
                    <NumberedList>
                    <NumberedListItem>
                        <Typography variant={getVariant()} color="text.secondary" >
                        굴착공사 발주자의 회사명
                        </Typography>
                    </NumberedListItem>
                    <NumberedListItem>
                        <Typography variant={getVariant()} color="text.secondary" >
                        굴착공사자의 회사명 및 공사 담당자의 인적사항
                        </Typography>
                    </NumberedListItem>
                    </NumberedList>
                    <NumberedListItem>
                        <Typography variant={getVariant()} color="text.secondary" >
                        굴착공사의 종류ㆍ위치 및 공사 예정일자
                        </Typography>
                    </NumberedListItem>
                    <NumberedListItem>
                        <Typography variant={getVariant()} color="text.secondary" >
                        가스사용자가 소유하거나 점유하는 토지에서 굴착공사를 하는 경우에는 가스사용자의 인적사항 및 시설명
                        </Typography>
                    </NumberedListItem>
                    <Typography variant="body1" color="text.secondary">
                      <span className="highlighted-text"> </span>
                    </Typography>
                    <EmphasizedText>도시가스배관 매설상황 확인</EmphasizedText>
                        <Typography variant={getVariant()} color="text.secondary" style={{marginBottom:"18px"}}>
                        도시가스사업이 허가된 지역에서 굴착공사를 하고자 할 경우에는 한국가스안전공사 내에 설치된 굴착공사 정보지원센터에 굴착공사 계획을 신고, 도시가스배관 매설유무를 확인, 굴착 ㆍ배관위치를 표시하는 등의 절차를 이행한 후 굴착공사 정보지원센터로 부터 굴착공사개시 통보를 받고 굴착공사를 시작 해야 합니다
                        </Typography>
                    <Typography variant="body1" color="text.secondary">
                      <span className="highlighted-text"> </span>
                    </Typography>
                    <EmphasizedText>굴착공사의 개시</EmphasizedText>
                        <Typography variant={getVariant()} color="text.secondary" style={{marginBottom:"18px"}}>
                        굴착공사정보지원센터로부터 굴착가능 여부를 통보 받은 후 도시가스사에 참관 요청하여 안전관리 전담자 참관하에 굴착공사 개시
                        </Typography>
                    <Typography variant="body1" color="text.secondary">
                      <span className="highlighted-text"> </span>
                    </Typography>
                    <EmphasizedText>관계 법령</EmphasizedText>
                    <NumberedList>
                    <NumberedListItem>
                        <Typography variant={getVariant()} color="text.secondary" >
                        도시가스사업법 제 30조의 3, 도시가스사업법 제 50 
                        </Typography>
                    </NumberedListItem>
                    <NumberedListItem>
                        <Typography variant={getVariant()} color="text.secondary" >
                        도시가스사업법 시행규칙 제 52, 도시가스사업법 시행규칙 제 55
                        </Typography>
                    </NumberedListItem>
                    </NumberedList>
                        
                  </Box>
                </CustomAccordionDetails>
              </CustomAccordion>
              <CustomAccordion>
                <CustomAccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6" color="primary.main">도시가스배관 손상방지기준</Typography>
                </CustomAccordionSummary>
                <CustomAccordionDetails>
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button variant="contained" color="primary" onClick={toggleFontSize} style={{marginBottom:'8px'}}>
                      글자 크기 변경
                    </Button>
                  </div>
                  <Box p={2} bgcolor="background.default" border="1px solid #757575" boxShadow={5}>
                    <NumberedList>
                    <Typography variant="body1" color="text.secondary">
                      <span className="highlighted-text"> </span>
                    </Typography>
                    <EmphasizedText>파일박기 및 빼기 작업</EmphasizedText>
                      <NumberedListItem>
                        <Typography variant={getVariant()} color="text.secondary">
                        공사착공 전에 도시가스사업자와 현장 협의를 통하여 공사 장소, 공사시간 및 안전조치에 관하여 서로 확인할 것.
                        </Typography>
                      </NumberedListItem>
                      <NumberedListItem>
                        <Typography variant={getVariant()} color="text.secondary">
                        도시가스배관과 수평거리 2m 이내에 파일박기를 하는 경우에는 도시가스 사업자의 입회아래 시험굴착으로 가스배관의 위치를 정확히 확인할 것.
                        </Typography>
                      </NumberedListItem>
                      <NumberedListItem>
                        <Typography variant={getVariant()} color="text.secondary">
                        도시가스배관의 위치를 파악한 경우에는 가스배관의 위치를 알리는 표지판을 설치할 것.
                        </Typography>
                      </NumberedListItem>
                      <NumberedListItem>
                        <Typography variant={getVariant()} color="text.secondary">
                        도시가스배관과 수평거리 30cm 이내에서는 파일박기를 하지 말것.
                        </Typography>
                      </NumberedListItem>
                      <NumberedListItem>
                        <Typography variant={getVariant()} color="text.secondary">
                        항타기는 도시가스 배관과 수평거리 2m 이상 되는 곳에 설치할 것. 다만, 부득이 하여 수평거리 2m 이내에 설치할 때에는 하중진동을 완화할 수 있는 조치를 할 것.
                        </Typography>
                      </NumberedListItem>
                      <NumberedListItem>
                        <Typography variant={getVariant()} color="text.secondary">
                        파일을 뺀 자리는 충분히 매울 것.
                        </Typography>
                      </NumberedListItem>
                    </NumberedList>
                    <NumberedList>
                    <EmphasizedText>그라우팅ㆍ보링작업</EmphasizedText>
                      <NumberedListItem>
                        <Typography variant={getVariant()} color="text.secondary">
                        파일박기 및 빼기작업 1~3을 준용할 것. 이 경우 파일박기는 그라우팅ㆍ보링 작업으로 본다.
                        </Typography>
                      </NumberedListItem>
                      <NumberedListItem>
                        <Typography variant={getVariant()} color="text.secondary">
                        시험굴착을 통하여 도시가스배관의 위치를 확인한 후 보링비트가 가스배관에 접촉 할 가능성이 있는 경우에는 가이드 파이프를 사용하여 직접 접촉되지 아니하도록 할 것.
                        </Typography>
                      </NumberedListItem>
                      </NumberedList>
                      <NumberedList>
                      <EmphasizedText>터파기ㆍ되메우기 및 포장작업</EmphasizedText>
                      <NumberedListItem>
                        <Typography variant={getVariant()} color="text.secondary">
                        파일박기 및 빼기작업 1~3을 준용할 것. 이 경우 파일박기는 터파기로 본다.
                        </Typography>
                      </NumberedListItem>
                      <NumberedListItem>
                        <Typography variant={getVariant()} color="text.secondary">
                        도시가스배관 주위를 굴착하는 경우 가스배관의 좌우 1m이내 부분은 인력으로 굴착 할 것.
                        </Typography>
                      </NumberedListItem>
                      <NumberedListItem>
                        <Typography variant={getVariant()} color="text.secondary">
                        도시가스배관에 근접하여 굴착하는 경우로서 주위에 도시가스배관의 부속시설물(밸브, 수취기, 전기 방식용 리드선 및 터미널 등)이 있을 대에는 작업으로 인한 이탈 그 밖에 손상방지에 주의할 것.
                        </Typography>
                      </NumberedListItem>
                      <NumberedListItem>
                        <Typography variant={getVariant()} color="text.secondary">
                        도시가스배관이 노출될 경우 배관의 코팅부가 손상되지 아니하도록 하고, 코팅부가 손상될 때에는 도시가스사업자에게 통보하여 보수를 한 후 작업을 진행할 것.
                        </Typography>
                        </NumberedListItem>
                        <NumberedListItem>
                        <Typography variant={getVariant()} color="text.secondary">
                        도시가스배관 주위에서 발파작업을 하는 경우에는 도시가스사업자의 입회아래 충분한 대책을 강구한 후 실시할 것.
                        </Typography>
                        </NumberedListItem>
                        <NumberedListItem>
                        <Typography variant={getVariant()} color="text.secondary">
                        도시가스배관 주위에서 다른 매설물을 설치할 때에는 30cm이상 이격할 것.
                        </Typography>
                        </NumberedListItem>
                        <NumberedListItem>
                        <Typography variant={getVariant()} color="text.secondary">
                        도시가스배관 주위를 되메우기 하거나 포장할 경우 배관 주위의 모래 채우기, 보호판, 보호포 및 라인마크 설치 및 도시가스배관 부속시설물의 설치 등은 굴착 전과 같은 상태가 되도록 할 것.
                        </Typography>
                        </NumberedListItem>
                        <NumberedListItem>
                        <Typography variant={getVariant()} color="text.secondary">
                        되메우기를 할 때에는 나중에 도시가스배관의 지반이 침하되지 않도록 필요한 조치를 할 것.
                        </Typography>
                        </NumberedListItem>
                      </NumberedList>              
                  </Box>
                </CustomAccordionDetails>
              </CustomAccordion>
              <CustomAccordion>
                <CustomAccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6" color="primary.main">도시가스 배관 식별법</Typography>
                </CustomAccordionSummary>
                <CustomAccordionDetails>
                  <Box p={2} bgcolor="background.default" border="1px solid #757575" boxShadow={5}>
                  <NumberedList>
                    <Typography variant="body1" color="text.secondary">
                      <span className="highlighted-text"> </span>
                    </Typography>
                    <EmphasizedText>라인마크</EmphasizedText>
                        <Typography variant="body1" color="text.secondary">
                        도시가스 배관의 매설방향 및 매설위치를 표시합니다
                        </Typography>
                        <ResponsiveImage src={'/lm.png'} alt="linemark" />
                     </NumberedList>
                     <NumberedList>
                    <Typography variant="body1" color="text.secondary">
                      <span className="highlighted-text"> </span>
                    </Typography>
                    <EmphasizedText>밸브박스</EmphasizedText>
                        <Typography variant="body1" color="text.secondary">
                        도시가스 배관의 긴급 시 또는 필요 시 가스를 차단하는 설비 입니다.
                        </Typography>
                        <ResponsiveImage src={'/vvbox.png'} alt="valvebox" />
                     </NumberedList>
                     <NumberedList>
                    <Typography variant="body1" color="text.secondary">
                      <span className="highlighted-text"> </span>
                    </Typography>
                    <EmphasizedText>테스트박스(T/B)</EmphasizedText>
                        <Typography variant="body1" color="text.secondary">
                        도시가스 배관의 매설방향 및 매설위치를 표시합니다.
                        </Typography>
                        <ResponsiveImage src={'/tbbox.png'} alt="testbox" />
                     </NumberedList>
                     <NumberedList>
                    <Typography variant="body1" color="text.secondary">
                      <span className="highlighted-text"> </span>
                    </Typography>
                    <EmphasizedText>보호포</EmphasizedText>
                        <Typography variant="body1" color="text.secondary">
                        지하의 매몰된 도시가스 배관의 위치를 알리는 표시로써 배관 직상부에 설치합니다.
                        </Typography>
                        <ResponsiveImage src={'/sheet.png'} alt="sheet" />
                     </NumberedList>
                     <NumberedList>
                    <Typography variant="body1" color="text.secondary">
                      <span className="highlighted-text"> </span>
                    </Typography>
                    <EmphasizedText>기타</EmphasizedText>
                        <Typography variant="body1" color="text.secondary">
                        외곽지역에 라인마크 대신 설치 된 표지판입니다.
                        </Typography>
                        <ResponsiveImage src={'/etc.png'} alt="etc" />
                     </NumberedList>
                  </Box>
                </CustomAccordionDetails>
              </CustomAccordion>
              <CustomAccordion>
                <CustomAccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6" color="primary.main">JB 홈페이지</Typography>
                </CustomAccordionSummary>
                <CustomAccordionDetails>
                  <Box p={1} bgcolor="background.default" display="flex" justifyContent="center">
                    <Button variant="contained" color="primary" onClick={() => window.open('https://www.jbcorporation.com/index/service_09.php', '_blank')}>
                    JB 홈페이지 바로가기
                    </Button>
                  </Box>
                </CustomAccordionDetails>
              </CustomAccordion>
            </Box>
          </Container>
        </StyledThemeProvider>
    </PageContainer>
      <FooterContainer>
        <p>Copyright (c) 2024 JB.co.,LTD.  All right Reserved.</p>
      </FooterContainer>
      </MuiThemeProvider>
    
  );
}

export default App;
