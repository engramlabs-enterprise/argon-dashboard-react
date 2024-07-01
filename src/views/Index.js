/*!

=========================================================
* Argon Dashboard React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";

const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="bg-gradient-default shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-light ls-1 mb-1">
                      Overview
                    </h6>
                    <h2 className="text-white mb-0">Zakat Distribution</h2>
                  </div>
                  <div className="col">
                    <Nav className="justify-content-end" pills>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 1,
                          })}
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 1)}
                        >
                          <span className="d-none d-md-block">Month</span>
                          <span className="d-md-none">M</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 2,
                          })}
                          data-toggle="tab"
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 2)}
                        >
                          <span className="d-none d-md-block">Week</span>
                          <span className="d-md-none">W</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Line
                    data={chartExample1[chartExample1Data]}
                    options={chartExample1.options}
                    getDatasetAtEvent={(e) => console.log(e)}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Performance
                    </h6>
                    <h2 className="mb-0">Presentase Penghimpunan</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Bar
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Presentase Blockchain Zakat Statistic</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">TANGGAL TRANSAKSI</th>
                    <th scope="col">JENIS TRANSAKSI</th>
                    <th scope="col">KATEGORI</th>
                    <th scope="col">LEMBAGA AMIL</th>
                    <th scope="col">MUSTAHIK</th>
                    <th scope="col">NOMINAL</th>
                    <th scope="col">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">May 16 2024 13:18:49</th>
                    <td>Zakat</td>
                    <td>Zakat Mal</td>
                    <td>Dompet Dhuafa</td>
                    <td>Andi</td>
                    <td><i className="fas fa-arrow-up text-success mr-3" />5.000.000</td>
                    <div style={{ display: 'flex', marginTop: '10px', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <Button className="mr-4" color="info" href="https://tokioscan-v2.engram.tech/tx/0x6fa70dc2197d295bdc2da723d00812b1ca051fc1523a04c637766c21d7f08b7d" target="_blank" rel="noopener noreferrer" size="sm" style={{ marginTop: '5px', marginLeft: '-29px' }} >On-chain Transaksi</Button>
                  </div>
                  </tr>
                  <tr>
                    <th scope="row">May 16 2024 13:19:13</th>
                    <td>Zakat</td>
                    <td>Zakat Mal</td>
                    <td>Lazizmu</td>
                    <td>Toni</td>
                    <td><i className="fas fa-arrow-up text-success mr-3" />2.000.000</td>
                    <div style={{ display: 'flex', marginTop: '10px', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <Button className="mr-4" color="info" href="https://tokioscan-v2.engram.tech/tx/0xbc43c4603b9a7c1ae18fd38c5fa46d210605e9646f1735a44b741dabc29954c0" target="_blank" rel="noopener noreferrer" size="sm" style={{ marginTop: '5px', marginLeft: '-29px' }} >On-chain Transaksi</Button>
                  </div>
                  </tr>
                  <tr>
                    <th scope="row">May 16 2024 13:21:01</th>
                    <td>Zakat</td>
                    <td>Zakat Mal</td>
                    <td>Dompet Dhuafa</td>
                    <td>Adit</td>
                    <td><i className="fas fa-arrow-up text-success mr-3" />3.000.000</td>
                    <div style={{ display: 'flex', marginTop: '10px', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <Button className="mr-4" color="info" href="https://tokioscan-v2.engram.tech/tx/0xd477908246b69f73d6f64f816026a3fcce5ffaea9046e9fb006eab329ccd417f" target="_blank" rel="noopener noreferrer" size="sm" style={{ marginTop: '5px', marginLeft: '-29px' }} >On-chain Transaksi</Button>
                  </div>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Blockchain traffic</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Block</th>
                    <th scope="col">Konsumsi Biaya Transaksi</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"><a href="https://tokioscan-v2.engram.tech/block/47230" target="_blank" rel="noopener noreferrer">47230</a></th>
                    <td><i className="fas fa-arrow-up text-success mr-3"/>0.000023024000161168 GRAM</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">23.02%</span>
                        <div>
                          <Progress
                            max="100"
                            value="23"
                            barClassName="bg-gradient-danger"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                  <th scope="row"><a href="https://tokioscan-v2.engram.tech/block/47232" target="_blank" rel="noopener noreferrer">47232</a></th>
                  <td><i className="fas fa-arrow-up text-success mr-3"/>0.000023036000161252 GRAM</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">23.04%</span>
                        <div>
                          <Progress
                            max="100"
                            value="23.04"
                            barClassName="bg-gradient-success"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                  <th scope="row"><a href="https://tokioscan-v2.engram.tech/block/47238" target="_blank" rel="noopener noreferrer">47238</a></th>
                  <td><i className="fas fa-arrow-up text-success mr-3"/>0.000023024000161168 GRAM</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">23.00%</span>
                        <div>
                          <Progress max="100" value="23" />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
