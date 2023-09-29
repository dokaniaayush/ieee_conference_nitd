import React from 'react';
import ScrollTop from "../components/ScrollTop";
import NavbOther from "../components/NavbOther";
import Footer from "./Footer";
import { Container } from 'react-bootstrap';

const SubmitPaper = () => {
    return (
        <>
            <div style={{ backgroundColor: "rgb(39, 48, 83)" }}>
                <NavbOther />

                <Container style={{ padding: "4rem 3rem 3rem" , backgroundColor: "white"}}>
                    <h3>Guidelines for Paper submission</h3>
                    <br />
                    <div style={{  textAlign: "justify"}}>
                        <p>
                            Prospective authors are encouraged to submit full papers in PDF format not exceeding 6 pages in double-column which includes all figures, tables, and references. The paper must follow the standard IEEE template (link here). Papers not compliant with the IEEE template including appropriate referencing or exceeding the page limit will be returned without review. Only original papers that have not been published or submitted for publication elsewhere will be considered. The paper must clearly indicate the research area, main results, and contributions. “<strong>All Accepted papers will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore’s Scope and quality requirements.” All Accepted papers will be submitted for publication to IEEE Xplore, Which is indexed with world’s leading Abstracting & Indexing (A&I) databases (SCOPUS etc.)</strong>
                        </p>
                        <p>
                            Submission of a scientific paper is considered a commitment that, upon acceptance, authors will submit their camera-ready version for inclusion in the formal proceedings and will present the paper at the conference. Each accepted contribution must have at least one paid registration by the time the camera-ready paper is submitted for inclusion in the proceedings. IBSSC reserves the right to remove from IEEE Xplore papers and posters not presented at the symposium.
                            <br />
                            <br />
                            For IEEE templates, click here or choose in <a target='_blank' href='https://drive.google.com/file/d/1wtDB8H8BGwZT07ZP0VazCtdMcNtnIFqy/view?usp=sharing'>Latex</a> or in <a target='_blank' href='https://docs.google.com/document/d/1Pr0QuIks00U00_SvwQkhI7O4mPaw9CQo/edit?usp=sharing&ouid=100661926393349936154&rtpof=true&sd=true'>.doc</a>
                        </p>
                        <p>
                            <h4>Deadline for Paper Submission:  TBA</h4>
                            Accepted papers will be assigned to a regular technical session. All papers will go through a rigorous, single-blind reviewing process. At least one author of an accepted paper will have to register at the conference in order to submit the final version. All accepted papers presented at the conference will be published in the conference proceeding and submitted to IEEE Xplore for publication subject to their norms. They should satisfy the requirements given in the publication policy.
                            <br />
                            <br />
                            The E-Copyright form must be submitted by the author or presenter at the time of registration.
                            <br />
                            <br />
                            <h4>IEEE Policies</h4>
                            IEEE reserves the right to exclude a paper from distribution after the conference (e.g., by not including it in IEEE Xplore) if the paper is not presented at the conference. Papers are reviewed on the basis that they do not contain plagiarized material and have not been submitted to any other conference at the same time (double submission). These matters are taken very seriously and IEEE will take action against any author who has engaged in either practice.
                            <br />
                            For any clarifications regarding the paper submission guidelines please e-mail: TBA
                        </p>
                    </div>
                </Container>
            </div>
            {/* below 3 lines are neccesaary in this order only, and outside of your main div */}
            <hr style={{ backgroundColor: "white", height: "5px", margin:"0px" }} />
            <ScrollTop />
            <Footer />
        </>
    );
}

export default SubmitPaper;
