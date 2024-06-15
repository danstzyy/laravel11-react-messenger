import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ChatLayout from '@/Layouts/ChatLayout';
function Dashboard({ auth }) {
    return (
        <>
            Messages
        </>
    );
}

Dashboard.layout = (page) => {
    return (
        <AuthenticatedLayout user={page.props.auth.user}>
            <ChatLayout children={page} />
        </AuthenticatedLayout>
    );
}

export default Dashboard
