import React from 'react';
import { Card } from 'antd';
import './Component.css'; // Assuming Component.css contains any additional styles you need
import { Button, Avatar, Space  } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Notify from './Notify'

const App: React.FC = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} >
    <Card title="Job searches"  bordered={true} style={{ width: 600,height: '100vh', border: '1px solid black' }}>
      {/* notification card */}  <Button   type="primary">Save alerts</Button>
      <Space wrap size={16}> <Avatar style={{marginLeft:280}} size="large" icon={<UserOutlined />} />
    </Space>
      <Card title="Notification" bordered={false} style={{ width: 250}}>
        {/* notofications */}
<Notify/><br /><br />
<label htmlFor=""><h4>Alerts</h4></label>
<Notify/>
      </Card>
    </Card>
  </div>
);

export default App;
