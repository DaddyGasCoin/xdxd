import React from 'react';
import { Avatar, Card, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const ProfileInfo = () => {

    return (
        <Card>
            <Avatar size={128} icon={<UserOutlined />} />
            <Typography.Title level={2}> (@michael)</Typography.Title>
            <Typography.Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed ultrices velit, eu eleifend nulla. Sed lacinia lectus sed dui venenatis, sit amet suscipit neque volutpat. Proin et tellus metus. Nunc auctor arcu erat, vitae dignissim arcu placerat et. Fusce ligula nisi, tincidunt id arcu eget, pretium dapibus mi. Suspendisse a feugiat sapien. Sed fermentum risus purus, sed vestibulum lacus porttitor pretium. Aliquam lacinia placerat felis nec rutrum.</Typography.Paragraph>
            <Typography.Paragraph>Curabitur in finibus justo. Praesent id urna tempus, aliquam est ut, volutpat nisl. Etiam nec eros mi. Cras tincidunt facilisis risus, ac consequat lorem tristique vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla eget aliquet metus, a mollis ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sit amet odio risus. Aliquam sollicitudin auctor magna. Quisque eget ligula pharetra, porta nisl nec, porttitor purus. Maecenas tristique feugiat odio vel sodales. Aliquam sem ex, varius nec urna vitae, malesuada luctus lectus. Aliquam lacinia efficitur lorem vel ornare. Suspendisse accumsan vestibulum pellentesque. Fusce sodales egestas ullamcorper. Nunc neque justo, interdum pretium tincidunt nec, dapibus non libero.</Typography.Paragraph>
        </Card>

    )
}

export default ProfileInfo