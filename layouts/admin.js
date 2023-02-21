import Sidebar from "./sidebar";
import {
    FaLaptop,
    FaQrcode, FaUsers,
    FaWrench, FaStar, FaReact, FaUser
} from "react-icons/fa";
import {
    MdOutlineWeb, MdOutlineMarkEmailRead, MdElectricBike
} from "react-icons/md";
import {useEffect, useState} from "react";
import {fetchProfile} from "../helpers/backend_helper";
import {useRouter} from "next/router";
import UserContext from "../contexts/user";
import I18nContext, {initI18n} from "../contexts/i18n";
import {FiHelpCircle} from "react-icons/fi";
import Header from "../components/dashboard/header";
import {IoDocumentTextOutline} from "react-icons/io5";
import {BsCardText} from "react-icons/bs";
import {TbCircles, TbPackage} from "react-icons/tb";
import {BiCategory, BiDollarCircle, BiMoney} from "react-icons/bi";

const AdminLayout = ({children}) => {
    const router = useRouter()
    const [user, setUser] = useState({})
    const i18n = initI18n()

    useEffect(() => {
        // getProfile()
    }, [])


    const getProfile = () => {
        fetchProfile().then(({error, data}) => {
            if (error === false) {
                setUser({...data})
            } else {
                router.push('/')
            }
        })
    }

    const menu = getMenu(user)

    // if (!user) {
    //     return (
    //         <div className="loader block">
    //             <Loader />
    //         </div>
    //     )
    // }

    return (
        <I18nContext.Provider value={i18n}>
            <UserContext.Provider value={{...user, getProfile}}>
                <div className="dashboard relative">
                    <Sidebar menu={menu}/>
                    <Header/>
                    <div className="fixed top-0 h-16 z-10 w-full bg-white"/>
                    <div className="main-content">
                        <div className="w-full sm:p-5 z-0" style={{minHeight: 400}}>
                            {children}
                        </div>
                    </div>
                </div>
            </UserContext.Provider>
        </I18nContext.Provider>

    )
}
export default AdminLayout


const menu = [
    {
        label: 'Dashboard',
        icon: FaLaptop,
        href: '/admin',
        permission: 'any'
    },
    {
        label: 'Services',
        icon: FaReact,
        permission: 'any',
        child: [
            {
                label: 'Category',
                icon: BiCategory,
                href: '/admin/services/category',
                childHrefs: ['/admin/services/category', "/admin/services/category/[_id]"],
                permission: 'any'
            },
            {
                label: 'Packages',
                icon: TbPackage,
                href: '/admin/services/packages',
                childHrefs: ['/admin/services/packages/add', "/admin/services/packages/[_id]"],
                permission: 'any'
            },
            {
                label: 'Vehicles',
                icon: MdElectricBike,
                href: '/admin/services/vehicles',
                childHrefs: ['/admin/services/vehicles/add', "/admin/services/vehicles/[_id]"],
                permission: 'any'
            },
        ]
    },
    {
        label: 'Driver Management',
        icon: FaUser,
        permission: 'any',
        child: [
            {
                label: 'Applications',
                icon: IoDocumentTextOutline,
                href: '/admin/driver/application',
                childHrefs: ['/admin/driver/add', "/admin/driver/[_id]"],
                permission: 'any'
            },
            {
                label: 'Application Forms',
                icon: BsCardText,
                href: '/admin/driver/application/forms',
                childHrefs: ['/admin/driver/application/form/add', "admin/driver/application/form/[_id]"],
                permission: 'any'
            },
            {
                label: 'Approved Driver',
                icon: FaUsers,
                href: '/admin/driver/approved-list',
                childHrefs: ['/admin/driver/approved-list/add', "/admin/driver/approved-list/[_id]"],
                permission: 'any'
            },
            {
                label: 'Rating',
                icon: FaStar,
                href: '/admin/driver/rating',
                childHrefs: ['/admin/driver/rating', "/admin/driver/rating"],
                permission: 'any'
            },
            {
                label: 'Trips',
                icon: TbCircles,
                href: '/admin/driver/trip',
                childHrefs: ['/admin/driver/trip/add', "/admin/driver/trip/[_id]"],
                permission: 'any'
            },
            {
                label: 'Bank Details',
                icon: FiHelpCircle,
                href: '/admin/driver/bank-details',
                childHrefs: ['/admin/driver/bank-details/add', "/admin/driver/bank-details/[_id]"],
                permission: 'any'
            },
            {
                label: 'Earning',
                icon: BiDollarCircle,
                href: '/admin/driver/earning',
                childHrefs: ['/admin/driver/earning/add', "/admin/driver/earning/[_id]"],
                permission: 'any'
            },
            {
                label: 'Withdraw Request',
                icon: BiMoney,
                href: '/admin/driver/withdraw',
                childHrefs: ['/admin/driver/withdraw/add', "/admin/driver/withdraw/[_id]"],
                permission: 'any'
            },
        ]
    },
    {
        label: 'Frontend Pages',
        icon: MdOutlineWeb,
        permission: 'any',
        child: [
            {
                label: 'Landing Page',
                icon: FaQrcode,
                href: '/admin/frontend/landing-page',
                childHrefs: ['/admin/frontend/landing-page/add', "/admin/frontend/landing-page/[_id]"],
                permission: 'any'
            },
            {
                label: 'Contact Page',
                icon: MdOutlineMarkEmailRead,
                href: '/admin/frontend/contact',
                childHrefs: ['/admin/frontend/contact-page/add', "/admin/frontend/contact-page/[_id]"],
                permission: 'any'
            },
            {
                label: 'FAQ',
                icon: FiHelpCircle,
                href: '/admin/frontend/faq',
                childHrefs: ['/admin/frontend/faq/add', "/admin/frontend/faq/[_id]"],
                permission: 'any'
            },
        ]
    },
    {
        label: 'Settings',
        icon: FaWrench,
        permission: 'any',
        child: [
            {
                label: 'Site Settings',
                icon: FaQrcode,
                href: '/admin/settings',
                permission: 'any'
            },{
                label: 'Email Settings',
                icon: FaQrcode,
                href: '/admin/settings/email',
                permission: 'any'
            },{
                label: 'SMS Settings',
                icon: FaQrcode,
                href: '/admin/settings/sms',
                permission: 'any'
            },
            {
                label: 'Payment Settings',
                icon: FaQrcode,
                href: '/admin/settings/payment',
                permission: 'any'
            },
            {
                label: 'Language & Translation',
                icon: FaQrcode,
                href: '/admin/settings/languages',
                permission: 'any'
            },
            {
                label: 'Whatsapp settings',
                icon: FaQrcode,
                href: '/admin/settings/whatsapp',
                permission: 'any'
            },

        ]
    },
]

const getMenu = user => {
    const router = useRouter()
    const hasPermission = menu => {
        if (menu.permission && havePermission(menu.permission, user?.roles)) {
            return true
        }
        if (menu.permissions) {
            for (let permission of menu.permissions) {
                if (havePermission(permission, user?.roles)) {
                    return true
                }
            }
        }
        if (process.browser) {
            if (router?.pathname === menu.href && user) {
                router?.push('/').then(() => {
                })
            }
        }
        return false
    }
    return menu?.map(d => ({...d, href: d.href?.replace('[_id]', user?._id)})).filter(menu => {
        if (+user?.profile?.is_owner === 1) {
            return true
        } else if (menu?.permission === 'any') {
            return true
        } else if (menu.permission || menu.permissions) {
            return hasPermission(menu)
        } else if (Array.isArray(menu.child)) {
            menu.child = menu.child.filter(child => {
                return hasPermission(child)
            })
            return menu.child.length > 0
        }
        return false
    })
}

export const havePermission = (permission, roles) => {
    for (let role of roles || []) {
        if (role?.permissions?.includes(permission)) {
            return true
        }
    }
    return false
}